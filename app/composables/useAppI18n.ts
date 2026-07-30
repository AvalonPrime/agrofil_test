import en from '~/locales/en.json'
import tr from '~/locales/tr.json'
import ar from '~/locales/ar.json'
import ru from '~/locales/ru.json'

export type AppLocale = 'en' | 'tr' | 'ar' | 'ru'

export const APP_LOCALES: {
  code: AppLocale
  labelKey: string
  dir: 'ltr' | 'rtl'
}[] = [
  { code: 'en', labelKey: 'locale.en', dir: 'ltr' },
  { code: 'tr', labelKey: 'locale.tr', dir: 'ltr' },
  { code: 'ar', labelKey: 'locale.ar', dir: 'rtl' },
  { code: 'ru', labelKey: 'locale.ru', dir: 'ltr' },
]

const messages: Record<AppLocale, Record<string, unknown>> = {
  en,
  tr,
  ar,
  ru,
}

const COOKIE_KEY = 'agrofil_locale'

function getByPath(obj: unknown, path: string): string | undefined {
  const parts = path.split('.')
  let cur: unknown = obj
  for (const part of parts) {
    if (!cur || typeof cur !== 'object') {
      return undefined
    }
    cur = (cur as Record<string, unknown>)[part]
  }
  return typeof cur === 'string' ? cur : undefined
}

export function parseAppLocale(value: unknown): AppLocale | null {
  const raw = Array.isArray(value) ? value[0] : value
  if (raw === 'en' || raw === 'tr' || raw === 'ar' || raw === 'ru') {
    return raw
  }
  return null
}

/** Match old Agrofil sitemap: EN has no lang query; TR/AR use ?lang=. */
export function withLocaleQuery(
  path: string,
  locale: AppLocale,
): string {
  const hashIndex = path.indexOf('#')
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : ''
  const withoutHash = hashIndex >= 0 ? path.slice(0, hashIndex) : path

  const qIndex = withoutHash.indexOf('?')
  const pathname = qIndex >= 0 ? withoutHash.slice(0, qIndex) : withoutHash
  const search = qIndex >= 0 ? withoutHash.slice(qIndex + 1) : ''
  const params = new URLSearchParams(search)

  if (locale === 'en') {
    params.delete('lang')
  } else {
    params.set('lang', locale)
  }

  const query = params.toString()
  return `${pathname || '/'}${query ? `?${query}` : ''}${hash}`
}

function applyDocumentLocale(locale: AppLocale) {
  if (!import.meta.client) {
    return
  }
  const meta = APP_LOCALES.find((item) => item.code === locale)
  document.documentElement.lang = locale
  document.documentElement.dir = meta?.dir || 'ltr'
  document.documentElement.classList.toggle('is-rtl', meta?.dir === 'rtl')
}

export function useAppI18n() {
  const route = useRoute()
  const localeCookie = useCookie<AppLocale | null>(COOKIE_KEY, {
    default: () => null,
    maxAge: 60 * 60 * 24 * 365,
    sameSite: 'lax',
    path: '/',
  })

  const locale = useState<AppLocale>('app-locale', () => {
    return (
      parseAppLocale(route.query.lang) ||
      parseAppLocale(localeCookie.value) ||
      'en'
    )
  })

  const t = (key: string): string => {
    return (
      getByPath(messages[locale.value], key) ||
      getByPath(messages.en, key) ||
      key
    )
  }

  const localePath = (path: string, loc: AppLocale = locale.value) => {
    return withLocaleQuery(path, loc)
  }

  const syncRouteLang = (next: AppLocale) => {
    if (!import.meta.client) {
      return
    }

    const url = new URL(window.location.href)
    const current = parseAppLocale(url.searchParams.get('lang'))
    const desired = next === 'en' ? null : next
    if (current === desired) {
      return
    }

    // history.replaceState only — router.replace triggers page:finish and
    // used to race/kill Webflow IX2 page-load animations on reload.
    if (next === 'en') {
      url.searchParams.delete('lang')
    } else {
      url.searchParams.set('lang', next)
    }
    window.history.replaceState(
      window.history.state,
      '',
      `${url.pathname}${url.search}${url.hash}`,
    )
  }

  const setLocale = (next: AppLocale) => {
    locale.value = next
    localeCookie.value = next
    applyDocumentLocale(next)
    syncRouteLang(next)
  }

  const resolveLocale = (): AppLocale => {
    if (import.meta.client) {
      const fromUrl = parseAppLocale(
        new URL(window.location.href).searchParams.get('lang'),
      )
      if (fromUrl) {
        return fromUrl
      }
    }
    return (
      parseAppLocale(route.query.lang) ||
      parseAppLocale(localeCookie.value) ||
      'en'
    )
  }

  const initLocale = () => {
    const next = resolveLocale()
    locale.value = next
    if (
      parseAppLocale(route.query.lang) ||
      (import.meta.client &&
        parseAppLocale(new URL(window.location.href).searchParams.get('lang')))
    ) {
      localeCookie.value = next
    }
    applyDocumentLocale(next)

    // Defer URL sync so first paint + IX2 page-load are undisturbed.
    if (import.meta.client) {
      window.setTimeout(() => syncRouteLang(next), 1600)
    }
  }

  return {
    locale,
    locales: APP_LOCALES,
    t,
    setLocale,
    initLocale,
    localePath,
    resolveLocale,
    applyDocumentLocale,
  }
}
