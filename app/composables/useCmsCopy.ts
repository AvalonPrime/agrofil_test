import type { AppLocale } from '~/composables/useAppI18n'

export type CmsCopyMap = Record<string, string>

const CMS_COPY_KEY = 'agrofilCmsCopy'

function setIf(copy: CmsCopyMap, key: string, value: string | null | undefined) {
  if (typeof value === 'string' && value.length > 0) {
    copy[key] = value
  }
}

export function provideCmsCopy(copy: Ref<CmsCopyMap>) {
  const parent = inject<Ref<CmsCopyMap>>(CMS_COPY_KEY, ref({}))
  const merged = computed(() => ({
    ...parent.value,
    ...copy.value,
  }))
  provide(CMS_COPY_KEY, merged)
}

/** i18n with CMS overlay (Global / About / Contact / …). */
export function useCmsCopy() {
  const i18n = useAppI18n()
  const copy = inject<Ref<CmsCopyMap>>(CMS_COPY_KEY, ref({}))

  const t = (key: string): string => copy.value[key] || i18n.t(key)

  return {
    ...i18n,
    t,
  }
}

export function mapStrapiGlobalToCopy(data: any): CmsCopyMap {
  if (!data) return {}
  const copy: CmsCopyMap = {}
  setIf(copy, 'topbar', data.topbar)
  const nav = data.nav || {}
  for (const key of Object.keys(nav)) {
    if (key === 'id') continue
    setIf(copy, `nav.${key}`, nav[key])
  }
  const footer = data.footer || {}
  setIf(copy, 'footer.description', footer.description)
  setIf(copy, 'footer.quickLinks', footer.quickLinks)
  setIf(copy, 'footer.utilityPages', footer.utilityPages)
  setIf(copy, 'footer.marquee', footer.marquee)
  setIf(copy, 'footer.phone', footer.phone)
  setIf(copy, 'footer.address', footer.address)
  setIf(copy, 'cta.title', data.cta?.title)
  setIf(copy, 'cta.button', data.cta?.buttonLabel)
  return copy
}

export async function useAsyncGlobalContent(locale: Ref<AppLocale> | AppLocale) {
  const config = useRuntimeConfig()
  const localeRef = isRef(locale) ? locale : ref(locale)

  const { data, error, refresh, status } = await useAsyncData(
    () => `strapi-global-${localeRef.value}`,
    async () => {
      const base = String(config.public.strapiUrl || '').replace(/\/$/, '')
      if (!base) return null
      try {
        return await $fetch<{ data: unknown }>(`${base}/api/global`, {
          query: {
            locale: localeRef.value,
            'populate[nav]': true,
            'populate[footer]': true,
            'populate[cta]': true,
          },
        })
      } catch (err) {
        console.warn('[global] Strapi fetch failed, using locale JSON', err)
        return null
      }
    },
    { watch: [localeRef] },
  )

  const globalCopy = computed(() => mapStrapiGlobalToCopy((data.value as any)?.data))

  return { globalCopy, error, refresh, status, raw: data }
}
