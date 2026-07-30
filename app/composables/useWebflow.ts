type WebflowApi = {
  destroy?: () => void
  ready?: () => void
  require?: (module: string) => Promise<{
    init?: () => void
    store?: { dispatch?: (action: unknown) => void }
  }>
}

type WebflowWindow = Window & { Webflow?: WebflowApi }

const bootState = {
  timer: null as ReturnType<typeof setTimeout> | null,
  generation: 0,
  lastRoute: '',
  bootedOnce: false,
  pendingDestroy: false,
  heroFallbackTimer: null as ReturnType<typeof setTimeout> | null,
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })
}

function doubleRaf() {
  return new Promise<void>((resolve) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => resolve())
    })
  })
}

async function waitForMarkup(timeoutMs = 4000) {
  const started = Date.now()

  while (Date.now() - started < timeoutMs) {
    const markups = Array.from(
      document.querySelectorAll<HTMLElement>('.harvestam-markup'),
    ).filter((node) => !node.classList.contains('harvestam-markup--loading'))

    const hasHeroOrNav = markups.some(
      (root) =>
        root.querySelector(
          '.rt-banner-main, .rt-inner-banner, .rt-hero-v4, .rt-navbar, [data-w-id], section',
        ),
    )

    if (hasHeroOrNav) {
      await nextTick()
      await doubleRaf()
      return true
    }

    await sleep(16)
  }

  return false
}

/** Wait until the current page's first-viewport banner exists (SPA race). */
async function waitForAboveFoldBanner(timeoutMs = 4000) {
  const started = Date.now()
  const selector = '.rt-banner-main, .rt-inner-banner, .rt-hero-v4'

  while (Date.now() - started < timeoutMs) {
    if (document.querySelector(selector)) {
      await nextTick()
      await doubleRaf()
      return true
    }
    await sleep(16)
  }

  return false
}

async function waitForWebflowApi(timeoutMs = 5000) {
  const started = Date.now()
  while (Date.now() - started < timeoutMs) {
    if ((window as WebflowWindow).Webflow) {
      return (window as WebflowWindow).Webflow!
    }
    await sleep(20)
  }
  return null
}

/**
 * Hero interactions in this template are SCROLL_INTO_VIEW (not PAGE_START).
 * After ix2.init(), elements already in the viewport stay at opacity:0 until a
 * real scroll delta runs. Nudge scroll so entrance animations play — do not
 * force-show with opacity/transform (that cancels the animation).
 */
function primeInViewScrollAnimations() {
  const y = window.scrollY

  window.dispatchEvent(new Event('scroll'))
  // Real scroll delta — Event('scroll') alone is not enough for IX2.
  window.scrollTo(0, y + 3)
  window.dispatchEvent(new Event('scroll'))
  window.scrollTo(0, Math.max(0, y))
  window.dispatchEvent(new Event('scroll'))
}

/** True only when fully hidden — never match mid-tween "opacity: 0.73". */
function isFullyHidden(el: HTMLElement): boolean {
  return getComputedStyle(el).opacity === '0'
}

/** IX2 slide/fade in progress — must not be force-snapped. */
function isIx2Animating(el: HTMLElement): boolean {
  const opacity = Number(getComputedStyle(el).opacity)
  if (opacity > 0 && opacity < 1) {
    return true
  }
  const inline = el.getAttribute('style') || ''
  return /will-change/i.test(inline)
}

/**
 * Last-resort reveal for above-the-fold nodes that never received SCROLL_INTO_VIEW.
 * Must NOT run during an active IX2 tween, and must NOT unlock below-the-fold
 * nodes (that would skip their scroll entrance and look like a hard snap).
 */
export function revealStuckHeroNodes() {
  if (!import.meta.client) {
    return
  }

  const roots = document.querySelectorAll<HTMLElement>(
    ['.rt-banner-main', '.rt-hero-v2', '.rt-hero-v3', '.rt-hero-v4', '.rt-inner-banner'].join(
      ', ',
    ),
  )

  const inViewport = (el: HTMLElement) => {
    const rect = el.getBoundingClientRect()
    return rect.bottom > 0 && rect.top < window.innerHeight
  }

  roots.forEach((root) => {
    if (!inViewport(root)) {
      return
    }

    const unlock = (node: HTMLElement) => {
      if (!inViewport(node) || !isFullyHidden(node) || isIx2Animating(node)) {
        return
      }
      // Skip nodes that use our CSS entrance system.
      if (node.classList.contains('agro-enter') || node.closest('.agro-enter-root')) {
        return
      }
      node.style.opacity = '1'
      const transform = getComputedStyle(node).transform
      if (transform && transform !== 'none') {
        node.style.transform = 'none'
      }
    }

    unlock(root)
    root.querySelectorAll<HTMLElement>('[data-w-id]').forEach(unlock)
  })
}

/** @deprecated Use revealStuckHeroNodes — global reveal breaks scroll IX2. */
export function revealStuckWebflowNodes(root: ParentNode = document) {
  if (root !== document && root instanceof Element) {
    root.querySelectorAll<HTMLElement>('[data-w-id]').forEach((node) => {
      if (!isFullyHidden(node) || isIx2Animating(node)) {
        return
      }
      node.style.opacity = '1'
    })
    return
  }
  revealStuckHeroNodes()
}

function scheduleHeroFallbackReveal() {
  if (bootState.heroFallbackTimer) {
    clearTimeout(bootState.heroFallbackTimer)
  }
  // Staggered contact/home entrances can run past 1.5s — wait until IX2 is done.
  bootState.heroFallbackTimer = setTimeout(() => {
    bootState.heroFallbackTimer = null
    revealStuckHeroNodes()
  }, 3200)
}

async function runWebflowBoot() {
  if (!import.meta.client) {
    return
  }

  const generation = ++bootState.generation
  await waitForMarkup()
  if (generation !== bootState.generation) {
    return
  }

  // After route changes, wait for the new page banner before ix2.init —
  // otherwise contact/about mount after init and stay at opacity:0 forever.
  if (bootState.pendingDestroy || bootState.bootedOnce) {
    await waitForAboveFoldBanner()
    if (generation !== bootState.generation) {
      return
    }
  }

  const webflow = await waitForWebflowApi()
  if (generation !== bootState.generation) {
    return
  }

  if (!webflow) {
    window.setTimeout(() => scheduleWebflowBoot('webflow-missing-retry'), 250)
    return
  }

  document.documentElement.classList.add('w-mod-js', 'w-mod-ix')

  const routePath = window.location.pathname
  const shouldDestroy =
    bootState.pendingDestroy ||
    (bootState.bootedOnce && bootState.lastRoute !== routePath)

  // Re-init on the same pathname kills mid-flight animations.
  if (bootState.bootedOnce && !shouldDestroy && bootState.lastRoute === routePath) {
    // Still re-prime in-view (e.g. after HMR / late hydration) without destroy.
    await doubleRaf()
    primeInViewScrollAnimations()
    scheduleHeroFallbackReveal()
    return
  }

  if (shouldDestroy) {
    webflow.destroy?.()
  }

  bootState.pendingDestroy = false
  bootState.lastRoute = routePath
  bootState.bootedOnce = true

  webflow.ready?.()

  try {
    const ix2 = await webflow.require?.('ix2')
    if (generation !== bootState.generation) {
      return
    }
    ix2?.init?.()
    await doubleRaf()
    // Let IX2 finish binding listeners, then prime in-view entrances.
    await sleep(40)
    if (generation !== bootState.generation) {
      return
    }
    primeInViewScrollAnimations()
    for (const delay of [120, 280, 500]) {
      window.setTimeout(() => {
        if (generation !== bootState.generation) {
          return
        }
        primeInViewScrollAnimations()
      }, delay)
    }
    scheduleHeroFallbackReveal()
  } catch {
    scheduleHeroFallbackReveal()
  }
}

/**
 * Debounced IX2 boot.
 * Pass `{ forceDestroy: true }` on pathname changes only — never for ?lang=.
 */
export function scheduleWebflowBoot(
  _reason = 'manual',
  options: { forceDestroy?: boolean } = {},
) {
  if (!import.meta.client) {
    return
  }

  if (options.forceDestroy) {
    bootState.pendingDestroy = true
  }

  if (bootState.timer) {
    clearTimeout(bootState.timer)
  }

  bootState.timer = setTimeout(() => {
    bootState.timer = null
    runWebflowBoot().catch(console.error)
  }, 32)
}

export function useWebflow(pageScripts: string[] = []) {
  const route = useRoute()

  const scriptSrc = (file: string) =>
    file.startsWith('/assets/') ? file : `/assets/js/${file}`

  useHead({
    script: pageScripts.map((file) => ({
      key: `wf-${file}`,
      src: scriptSrc(file),
      tagPosition: 'bodyClose',
    })),
  })

  onMounted(() => {
    scheduleWebflowBoot('page-mounted')
  })

  watch(
    () => route.path,
    (path, prevPath) => {
      if (!prevPath || path === prevPath) {
        return
      }
      scheduleWebflowBoot('route-change', { forceDestroy: true })
    },
  )
}
