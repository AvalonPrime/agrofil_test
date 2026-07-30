const BLOCKED_HOSTS = new Set([
  'webflow.com',
  'www.webflow.com',
  'formdata.webflow.com',
  'editor-api.webflow.com',
  'challenges.cloudflare.com',
  'use.typekit.net',
  'fonts.googleapis.com',
  'fonts.gstatic.com',
])

function isBlockedUrl(url: string): boolean {
  try {
    const host = new URL(url, window.location.origin).hostname.toLowerCase()
    return BLOCKED_HOSTS.has(host) || host.endsWith('.webflow.com')
  } catch {
    return false
  }
}

function removeWebflowBadge(root: ParentNode = document) {
  root.querySelectorAll('.w-webflow-badge').forEach((node) => node.remove())
}

function blockWebflowForms(root: ParentNode = document) {
  root.querySelectorAll<HTMLFormElement>('form').forEach((form) => {
    if (!form.closest('.w-form, .w-password-page')) {
      return
    }

    form.setAttribute('data-harvestam-blocked', 'true')
    if (form.getAttribute('action')?.startsWith('http')) {
      form.removeAttribute('action')
    }
    form.setAttribute('method', 'get')
  })
}

function showLocalFormSuccess(form: HTMLFormElement) {
  const wrapper = form.closest('.w-form, .w-password-page')
  const done = wrapper?.querySelector<HTMLElement>('.w-form-done')
  const fail = wrapper?.querySelector<HTMLElement>('.w-form-fail')

  fail?.style.setProperty('display', 'none')
  if (done) {
    done.style.display = 'block'
    return
  }

  const note = document.createElement('p')
  note.className = 'harvestam-form-note'
  note.textContent = 'Form submission is disabled in this standalone build.'
  form.insertAdjacentElement('afterend', note)
}

function handleBlockedSubmit(event: Event) {
  const form = event.target
  if (!(form instanceof HTMLFormElement)) {
    return
  }

  if (!form.closest('.w-form, .w-password-page')) {
    return
  }

  event.preventDefault()
  event.stopPropagation()
  event.stopImmediatePropagation()
  showLocalFormSuccess(form)
}

function patchNetworkCalls() {
  const originalFetch = window.fetch.bind(window)
  window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
    const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url
    if (isBlockedUrl(url)) {
      return Promise.reject(new Error(`Blocked external request: ${url}`))
    }
    return originalFetch(input, init)
  }

  const xhrOpen = XMLHttpRequest.prototype.open
  XMLHttpRequest.prototype.open = function open(
    method: string,
    url: string | URL,
    async?: boolean,
    username?: string | null,
    password?: string | null,
  ) {
    const resolved = typeof url === 'string' ? url : url.href
    if (isBlockedUrl(resolved)) {
      throw new Error(`Blocked external request: ${resolved}`)
    }
    return xhrOpen.call(this, method, url, async ?? true, username, password)
  }

  const jquery = (window as typeof window & { jQuery?: { ajaxPrefilter?: (fn: (options: { url?: string }) => void) => void } }).jQuery
  jquery?.ajaxPrefilter?.((options) => {
    if (options.url && isBlockedUrl(options.url)) {
      options.url = 'about:blank'
    }
  })
}

function refreshPrivacyGuards() {
  removeWebflowBadge()
  blockWebflowForms()
}

export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) {
    return
  }

  patchNetworkCalls()
  document.addEventListener('submit', handleBlockedSubmit, true)

  const observer = new MutationObserver(() => {
    refreshPrivacyGuards()
  })
  observer.observe(document.documentElement, { childList: true, subtree: true })

  refreshPrivacyGuards()
  nuxtApp.hook('page:finish', () => {
    refreshPrivacyGuards()
  })
})
