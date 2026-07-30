import {
  parseAppLocale,
  withLocaleQuery,
  type AppLocale,
} from '~/composables/useAppI18n'

export default defineNuxtPlugin((nuxtApp) => {
  const route = useRoute()
  const router = useRouter()
  const {
    initLocale,
    resolveLocale,
    applyDocumentLocale,
  } = useAppI18n()
  const locale = useState<AppLocale>('app-locale')
  const localeCookie = useCookie<AppLocale | null>('agrofil_locale')

  const resolved = resolveLocale()
  locale.value = resolved
  applyDocumentLocale(resolved)

  nuxtApp.hook('app:mounted', () => {
    initLocale()
  })

  if (import.meta.client) {
    // Honour ?lang= when present (shared / indexed URLs).
    watch(
      () => route.query.lang,
      (lang) => {
        const fromQuery = parseAppLocale(lang)
        if (!fromQuery || locale.value === fromQuery) {
          return
        }
        locale.value = fromQuery
        localeCookie.value = fromQuery
        applyDocumentLocale(fromQuery)
      },
    )

    // Keep ?lang=tr|ar on navigations while that locale is active.
    // Use history.replaceState to avoid page:finish → early reveal races.
    router.afterEach((to) => {
      const active = locale.value
      if (active === 'en') {
        return
      }
      if (parseAppLocale(to.query.lang) === active) {
        return
      }
      const next = withLocaleQuery(to.fullPath, active)
      if (next !== to.fullPath) {
        window.history.replaceState(window.history.state, '', next)
      }
    })
  }
})
