import type { HomeCopyMap, HomeTextCard, StrapiHome } from '~/types/home'
import type { AppLocale } from '~/composables/useAppI18n'

const HOME_COPY_KEY = 'agrofilHomeCopy'

function setIf(copy: HomeCopyMap, key: string, value: string | null | undefined) {
  if (typeof value === 'string' && value.length > 0) {
    copy[key] = value
  }
}

function setCardPair(
  copy: HomeCopyMap,
  slug: string | null | undefined,
  title: string,
  description: string | null | undefined,
  titleKey: string,
  descKey: string,
) {
  if (!slug) {
    return
  }
  copy[`home.${titleKey}`] = title
  if (description) {
    copy[`home.${descKey}`] = description
  }
}

function mapItems(
  copy: HomeCopyMap,
  items: HomeTextCard[] | undefined,
  titleMap: Record<string, [string, string]>,
) {
  for (const item of items || []) {
    const keys = titleMap[item.slug || '']
    if (keys) {
      setCardPair(copy, item.slug, item.title, item.description, keys[0], keys[1])
    }
  }
}

/** Map nested Strapi Home → flat i18n keys used by Nuxt sections. */
export function mapStrapiHomeToCopy(data: StrapiHome | null | undefined): HomeCopyMap {
  if (!data) {
    return {}
  }

  const copy: HomeCopyMap = {}
  const hero = data.hero
  const offerings = data.offerings
  const methods = data.methods
  const about = data.about
  const products = data.products
  const choose = data.choose
  const focus = data.focus
  const process = data.process
  const impact = data.impact
  const cta = data.cta

  setIf(copy, 'home.heroTitle', hero?.title)
  setIf(copy, 'home.exploreProducts', hero?.exploreButton)
  setIf(copy, 'home.scrollDown', hero?.scrollHint)
  setIf(copy, 'home.happyCustomers', hero?.customersLabel)
  setIf(copy, 'home.farmersConnected', hero?.farmersLabel)
  setIf(copy, 'home.joinToday', hero?.joinButton)

  setIf(copy, 'home.offeringsEyebrow', offerings?.eyebrow)
  setIf(copy, 'home.offeringsTitle', offerings?.title)
  mapItems(copy, offerings?.items, {
    drip: ['drip', 'dripDesc'],
    chemical: ['chemical', 'chemicalDesc'],
    organic: ['organic', 'organicDesc'],
    orgamineral: ['orgamineral', 'orgamineralDesc'],
    micro: ['micro', 'microDesc'],
  })

  setIf(copy, 'home.methodsEyebrow', methods?.eyebrow)
  setIf(copy, 'home.methodsTitle', methods?.title)
  setIf(copy, 'home.viewProducts', methods?.viewButton || process?.viewButton)
  mapItems(copy, methods?.items, {
    organic: ['organicMethod', 'organicMethodDesc'],
    chemical: ['chemicalMethod', 'chemicalMethodDesc'],
    drip: ['dripMethod', 'dripMethodDesc'],
    micro: ['microMethod', 'microMethodDesc'],
    orgamineral: ['orgamineralMethod', 'orgamineralMethodDesc'],
  })

  setIf(copy, 'home.aboutProducts', about?.productsLabel)
  setIf(copy, 'home.aboutSoil', about?.soilLabel)
  setIf(copy, 'home.aboutTitle', about?.title)
  setIf(copy, 'home.aboutP1', about?.paragraph1)
  setIf(copy, 'home.aboutP2', about?.paragraph2)
  setIf(copy, 'home.viewMore', about?.viewMoreButton)
  setIf(copy, 'home.aboutHarvest', about?.harvestLabel)
  setIf(copy, 'home.yearsActive', about?.yearsLabel)
  setIf(copy, 'home.aboutLabel', about?.sectionLabel)

  setIf(copy, 'home.trusted', data.trusted?.text || data.trustedText)

  setIf(copy, 'home.productsEyebrow', products?.eyebrow)
  setIf(copy, 'home.productsTitle', products?.title)
  for (const item of products?.items || []) {
    const map: Record<string, string> = {
      drip: 'productsDrip',
      organic: 'productsOrganic',
      chemical: 'productsChemical',
      micro: 'productsMicro',
    }
    const key = map[item.slug || '']
    if (key) {
      setIf(copy, `home.${key}`, item.title)
    }
  }

  setIf(copy, 'home.chooseEyebrow', choose?.eyebrow)
  setIf(copy, 'home.chooseTitle', choose?.title)
  mapItems(copy, choose?.items, {
    quality: ['chooseQuality', 'chooseQualityDesc'],
    integrity: ['chooseIntegrity', 'chooseIntegrityDesc'],
    innovation: ['chooseInnovation', 'chooseInnovationDesc'],
    global: ['chooseGlobal', 'chooseGlobalDesc'],
  })

  setIf(copy, 'home.focusWord1', focus?.word1)
  setIf(copy, 'home.focusWord2', focus?.word2)
  setIf(copy, 'home.focusWord3', focus?.word3)
  setIf(copy, 'home.focusWord4', focus?.word4)
  mapItems(copy, focus?.items, {
    eco: ['focusEco', 'focusEcoDesc'],
    balanced: ['focusBalanced', 'focusBalancedDesc'],
    quality: ['focusQuality', 'focusQualityDesc'],
  })

  setIf(copy, 'home.processTitle', process?.title)
  setIf(copy, 'home.processSubtitle', process?.subtitle)
  mapItems(copy, process?.items, {
    soil: ['processSoil', 'processSoilDesc'],
    nutrient: ['processNutrient', 'processNutrientDesc'],
    yields: ['processYields', 'processYieldsDesc'],
    balanced: ['processBalanced', 'processBalancedDesc'],
    drip: ['processDrip', 'processDripDesc'],
    micro: ['processMicro', 'processMicroDesc'],
  })

  setIf(copy, 'home.impactTitle', impact?.title)
  setIf(copy, 'home.impactText', impact?.text)
  setIf(copy, 'home.impactYield', impact?.yieldLabel)
  setIf(copy, 'home.impactSupport', impact?.supportLabel)

  setIf(copy, 'cta.title', cta?.title)
  setIf(copy, 'cta.button', cta?.buttonLabel)

  return copy
}

export function provideHomeCopy(copy: Ref<HomeCopyMap>) {
  provide(HOME_COPY_KEY, copy)
}

export function useHomeCopy() {
  const i18n = useAppI18n()
  const copy = inject<Ref<HomeCopyMap>>(HOME_COPY_KEY, ref({}))

  const t = (key: string): string => {
    return copy.value[key] || i18n.t(key)
  }

  return {
    ...i18n,
    t,
  }
}

export async function useAsyncHomeContent(locale: Ref<AppLocale> | AppLocale) {
  const config = useRuntimeConfig()
  const localeRef = isRef(locale) ? locale : ref(locale)

  const { data, error, refresh, status } = await useAsyncData(
    () => `strapi-home-${localeRef.value}`,
    async () => {
      const base = String(config.public.strapiUrl || '').replace(/\/$/, '')
      if (!base) {
        return null
      }
      try {
        return await $fetch<{ data: StrapiHome | null }>(`${base}/api/home`, {
          query: {
            locale: localeRef.value,
            'populate[hero][populate]': '*',
            'populate[offerings][populate][items][populate]': '*',
            'populate[methods][populate][items][populate]': '*',
            'populate[about][populate]': '*',
            'populate[trusted][populate]': '*',
            'populate[products][populate][items][populate]': '*',
            'populate[choose][populate][items][populate]': '*',
            'populate[choose][populate][image]': true,
            'populate[focus][populate][items][populate]': '*',
            'populate[focus][populate][image]': true,
            'populate[process][populate][items][populate]': '*',
            'populate[impact][populate]': '*',
            'populate[cta][populate]': '*',
          },
        })
      } catch (err) {
        console.warn('[home] Strapi fetch failed, using locale JSON fallback', err)
        return null
      }
    },
    {
      watch: [localeRef],
    },
  )

  const homeCopy = computed<HomeCopyMap>(() =>
    mapStrapiHomeToCopy(data.value?.data ?? null),
  )

  return {
    homeCopy,
    error,
    refresh,
    status,
    raw: data,
    home: computed(() => data.value?.data ?? null),
  }
}
