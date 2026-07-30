import type { AppLocale } from '~/composables/useAppI18n'
import type { CmsCopyMap } from '~/composables/useCmsCopy'
import type { StrapiAbout } from '~/composables/useAboutMedia'

function setIf(copy: CmsCopyMap, key: string, value: string | null | undefined) {
  if (typeof value === 'string' && value.length > 0) {
    copy[key] = value
  }
}

export function mapStrapiAboutToCopy(data: any): CmsCopyMap {
  if (!data) return {}
  const copy: CmsCopyMap = {}
  const h = data.hero || {}
  setIf(copy, 'about.heroEyebrow', h.eyebrow)
  setIf(copy, 'about.heroTitle', h.title)
  setIf(copy, 'about.heroCta', h.cta)
  setIf(copy, 'about.heroCardTitle', h.cardTitle)
  setIf(copy, 'about.heroCardText', h.cardText)

  const impact = data.impact || {}
  setIf(copy, 'about.impactEyebrow', impact.eyebrow)
  setIf(copy, 'about.impactTitle', impact.title)
  setIf(copy, 'about.impactProducts', impact.productsLabel)
  setIf(copy, 'about.impactSuppliers', impact.suppliersLabel)
  setIf(copy, 'about.impactTeam', impact.teamLabel)
  setIf(copy, 'about.impactExport', impact.exportLabel)

  const mission = data.mission || {}
  setIf(copy, 'about.missionEyebrow', mission.eyebrow)
  setIf(copy, 'about.missionTitle', mission.title)
  setIf(copy, 'about.missionText', mission.text)
  setIf(copy, 'about.missionCta', mission.cta)
  setIf(copy, 'about.missionQuality', mission.qualityTitle)
  setIf(copy, 'about.missionQualityDesc', mission.qualityDesc)
  setIf(copy, 'about.missionIntegrity', mission.integrityTitle)
  setIf(copy, 'about.missionIntegrityDesc', mission.integrityDesc)

  setIf(copy, 'about.trusted', data.trustedText)

  const choose = data.choose || {}
  setIf(copy, 'about.chooseTitle', choose.title)
  const chooseMap: Record<string, [string, string]> = {
    quality: ['choose1', 'choose1Desc'],
    innovation: ['choose2', 'choose2Desc'],
    global: ['choose3', 'choose3Desc'],
  }
  for (const item of choose.items || []) {
    const keys = chooseMap[item.slug || '']
    if (keys) {
      setIf(copy, `about.${keys[0]}`, item.title)
      setIf(copy, `about.${keys[1]}`, item.description)
    }
  }

  const grow = data.grow || {}
  setIf(copy, 'about.growEyebrow', grow.eyebrow)
  setIf(copy, 'about.growTitle', grow.title)
  setIf(copy, 'about.growText', grow.text)
  const growMap: Record<string, string> = {
    organic: 'growOrganic',
    drip: 'growDrip',
    chemical: 'growChemical',
    micro: 'growMicro',
  }
  for (const item of grow.items || []) {
    const key = growMap[item.slug || '']
    if (key) setIf(copy, `about.${key}`, item.title)
  }

  const quality = data.quality || {}
  setIf(copy, 'about.qualityEyebrow', quality.eyebrow)
  setIf(copy, 'about.qualityTitle', quality.title)
  const qMap: Record<string, [string, string]> = {
    organic: ['qualityOrganic', 'qualityOrganicDesc'],
    chemical: ['qualityChemical', 'qualityChemicalDesc'],
    drip: ['qualityDrip', 'qualityDripDesc'],
    micro: ['qualityMicro', 'qualityMicroDesc'],
    orgamineral: ['qualityOrgamineral', 'qualityOrgamineralDesc'],
  }
  for (const item of quality.items || []) {
    const keys = qMap[item.slug || '']
    if (keys) {
      setIf(copy, `about.${keys[0]}`, item.title)
      setIf(copy, `about.${keys[1]}`, item.description)
    }
  }

  const insights = data.insights || {}
  setIf(copy, 'about.insightsEyebrow', insights.eyebrow)
  setIf(copy, 'about.insightsTitle', insights.title)
  setIf(copy, 'about.insightsText', insights.text)
  setIf(copy, 'about.insightsQuality', insights.qualityLabel)
  setIf(copy, 'about.insightsIntegrity', insights.integrityLabel)
  setIf(copy, 'about.insightsInnovation', insights.innovationLabel)

  const team = data.team || {}
  setIf(copy, 'about.teamEyebrow', team.eyebrow)
  setIf(copy, 'about.teamTitle', team.title)
  const members = team.members || []
  const teamKeys = [
    ['team1Name', 'team1Role'],
    ['team2Name', 'team2Role'],
    ['team3Name', 'team3Role'],
  ] as const
  members.forEach((m: any, i: number) => {
    const keys = teamKeys[i]
    if (!keys) return
    setIf(copy, `about.${keys[0]}`, m.name)
    setIf(copy, `about.${keys[1]}`, m.role)
  })

  return copy
}

export async function useAsyncAboutContent(locale: Ref<AppLocale> | AppLocale) {
  const config = useRuntimeConfig()
  const localeRef = isRef(locale) ? locale : ref(locale)

  const { data, error, refresh, status } = await useAsyncData(
    () => `strapi-about-${localeRef.value}`,
    async () => {
      const base = String(config.public.strapiUrl || '').replace(/\/$/, '')
      if (!base) return null
      try {
        return await $fetch<{ data: unknown }>(`${base}/api/about`, {
          query: {
            locale: localeRef.value,
            'populate[hero][populate]': '*',
            'populate[impact][populate]': '*',
            'populate[mission][populate]': '*',
            'populate[trustedLogos]': true,
            'populate[choose][populate][items][populate]': '*',
            'populate[grow][populate][items][populate]': '*',
            'populate[quality][populate][items][populate]': '*',
            'populate[insights][populate]': '*',
            'populate[team][populate][members][populate]': '*',
          },
        })
      } catch (err) {
        console.warn('[about] Strapi fetch failed, using locale JSON', err)
        return null
      }
    },
    { watch: [localeRef] },
  )

  const aboutCopy = computed(() => mapStrapiAboutToCopy((data.value as any)?.data))
  const about = computed(() => ((data.value as any)?.data as StrapiAbout | null) ?? null)
  return { aboutCopy, about, error, refresh, status, raw: data }
}
