const HTML_ROUTE_RE = /^(?:\.\.\/)*(?:[a-z0-9-]+\/)*index\.html$/i

function htmlHrefToRoute(href: string): string | null {
  const raw = href.trim()
  if (!raw || raw.startsWith('#') || raw.startsWith('mailto:') || raw.startsWith('tel:')) {
    return null
  }

  try {
    const url = new URL(raw, window.location.origin)
    if (url.origin !== window.location.origin) {
      return null
    }
    return url.pathname + url.search + url.hash
  } catch {
    const [pathOnly = ''] = raw.split('?')
    if (!HTML_ROUTE_RE.test(pathOnly) && pathOnly !== 'index.html') {
      const normalized = pathOnly.replace(/^(?:\.\.\/)+/, '').replace(/\/index\.html$/, '')
      if (normalized) {
        return `/${normalized}`
      }
    }

    const cleaned = pathOnly.replace(/^(?:\.\.\/)+/, '')
    if (cleaned === 'index.html' || cleaned === '') {
      return '/'
    }
    if (cleaned.endsWith('/index.html')) {
      return `/${cleaned.slice(0, -'/index.html'.length)}`
    }
  }

  return null
}

function syncNavCurrentClass(root: ParentNode = document) {
  const path = window.location.pathname
  root.querySelectorAll<HTMLAnchorElement>('.harvestam-markup a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return
    }

    let url: URL
    try {
      url = new URL(href, window.location.origin)
    } catch {
      return
    }

    if (url.origin !== window.location.origin) {
      return
    }

    const isCurrent = url.pathname === path
    anchor.classList.toggle('w--current', isCurrent)
    if (anchor.classList.contains('w-nav-link') || anchor.classList.contains('w-nav-brand') || anchor.classList.contains('rt-nav-logo-wrap')) {
      if (isCurrent) {
        anchor.setAttribute('aria-current', 'page')
      } else {
        anchor.removeAttribute('aria-current')
      }
    }
  })
}

function patchInternalLinks(root: ParentNode = document) {
  const { localePath } = useAppI18n()

  root.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href')
    if (!href) {
      return
    }

    const route = htmlHrefToRoute(href)
    if (!route) {
      return
    }

    anchor.setAttribute('href', localePath(route))
    if (anchor.getAttribute('target') === '_blank') {
      anchor.removeAttribute('target')
    }
  })
}

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()

  const handleClick = (event: MouseEvent) => {
    const target = event.target
    if (!(target instanceof Element)) {
      return
    }

    const anchor = target.closest('a[href]')
    if (!anchor || anchor.getAttribute('target') === '_blank') {
      return
    }

    const href = anchor.getAttribute('href')
    if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return
    }

    let url: URL
    try {
      url = new URL(href, window.location.origin)
    } catch {
      return
    }

    if (url.origin !== window.location.origin) {
      return
    }

    const { localePath } = useAppI18n()
    event.preventDefault()
    router.push(localePath(url.pathname + url.search + url.hash))
  }

  const refreshLinks = () => {
    patchInternalLinks()
    syncNavCurrentClass()
  }

  if (import.meta.client) {
    document.addEventListener('click', handleClick)
    nuxtApp.hook('page:finish', () => {
      refreshLinks()
      // Do not re-init IX2 here — a second init on the same route
      // cancels mid-flight hero page-load animations after reload.
    })
    refreshLinks()
  }
})
