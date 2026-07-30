import type { AppLocale } from '~/composables/useAppI18n'
import type { CmsCopyMap } from '~/composables/useCmsCopy'
import type { StrapiContact } from '~/composables/useContactMedia'

function setIf(copy: CmsCopyMap, key: string, value: string | null | undefined) {
  if (typeof value === 'string' && value.length > 0) {
    copy[key] = value
  }
}

export function mapStrapiContactToCopy(data: any): CmsCopyMap {
  if (!data) return {}
  const copy: CmsCopyMap = {}
  const b = data.banner || {}
  setIf(copy, 'contact.bannerEyebrow', b.eyebrow)
  setIf(copy, 'contact.bannerTitle', b.title)

  const r = data.reach || {}
  setIf(copy, 'contact.reachTitle', r.title)
  setIf(copy, 'contact.emailLabel', r.emailLabel)
  setIf(copy, 'contact.phoneLabel', r.phoneLabel)
  setIf(copy, 'contact.locationLabel', r.locationLabel)
  setIf(copy, 'contact.address', r.address)
  setIf(copy, 'contact.phone', r.phone)
  setIf(copy, 'contact.email', r.email)
  setIf(copy, 'contact.emailExport', r.emailExport)
  setIf(copy, 'contact.hoursNote', r.hoursNote)

  const f = data.form || {}
  setIf(copy, 'contact.formSuccess', f.successMessage)
  setIf(copy, 'contact.formError', f.errorMessage)
  setIf(copy, 'contact.namePlaceholder', f.namePlaceholder)
  setIf(copy, 'contact.emailPlaceholder', f.emailPlaceholder)
  setIf(copy, 'contact.phonePlaceholder', f.phonePlaceholder)
  setIf(copy, 'contact.farmingPlaceholder', f.farmingPlaceholder)
  setIf(copy, 'contact.farmingMixed', f.farmingMixed)
  setIf(copy, 'contact.farmingAgroforestry', f.farmingAgroforestry)
  setIf(copy, 'contact.farmingPlantation', f.farmingPlantation)
  setIf(copy, 'contact.subjectPlaceholder', f.subjectPlaceholder)
  setIf(copy, 'contact.subjectAgriculture', f.subjectAgriculture)
  setIf(copy, 'contact.subjectAgronomy', f.subjectAgronomy)
  setIf(copy, 'contact.subjectHorticulture', f.subjectHorticulture)
  setIf(copy, 'contact.messagePlaceholder', f.messagePlaceholder)
  setIf(copy, 'contact.submit', f.submit)
  setIf(copy, 'contact.submitNow', f.submitNow)

  const faq = data.faq || {}
  setIf(copy, 'contact.faqEyebrow', faq.eyebrow)
  setIf(copy, 'contact.faqTitle', faq.title)
  ;(faq.items || []).forEach((item: any, i: number) => {
    const n = i + 1
    setIf(copy, `contact.faq${n}Q`, item.question)
    setIf(copy, `contact.faq${n}A`, item.answer)
  })

  return copy
}

export async function useAsyncContactContent(locale: Ref<AppLocale> | AppLocale) {
  const config = useRuntimeConfig()
  const localeRef = isRef(locale) ? locale : ref(locale)

  const { data, error, refresh, status } = await useAsyncData(
    () => `strapi-contact-${localeRef.value}`,
    async () => {
      const base = String(config.public.strapiUrl || '').replace(/\/$/, '')
      if (!base) return null
      try {
        return await $fetch<{ data: unknown }>(`${base}/api/contact`, {
          query: {
            locale: localeRef.value,
            'populate[banner][populate]': 'image',
            'populate[reach]': true,
            'populate[form]': true,
            'populate[faq][populate]': 'items',
          },
        })
      } catch (err) {
        console.warn('[contact] Strapi fetch failed, using locale JSON', err)
        return null
      }
    },
    { watch: [localeRef] },
  )

  const contactCopy = computed(() => mapStrapiContactToCopy((data.value as any)?.data))
  const contact = computed(() => ((data.value as any)?.data as StrapiContact | null) ?? null)
  return { contactCopy, contact, error, refresh, status, raw: data }
}
