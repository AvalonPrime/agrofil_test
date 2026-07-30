import { resolveMediaUrl } from '~/utils/mediaUrl'

export type StrapiMedia = {
  url?: string | null
  alternativeText?: string | null
  width?: number | null
  height?: number | null
} | null

export type StrapiAbout = {
  hero?: {
    imageLeft?: StrapiMedia
    imageRight?: StrapiMedia
  } | null
  impact?: {
    iconProducts?: StrapiMedia
    iconSuppliers?: StrapiMedia
    iconTeam?: StrapiMedia
    iconExport?: StrapiMedia
  } | null
  mission?: { image?: StrapiMedia } | null
  trustedLogos?: StrapiMedia[] | null
  choose?: {
    items?: { slug?: string | null; image?: StrapiMedia }[]
  } | null
  grow?: {
    items?: { slug?: string | null; image?: StrapiMedia }[]
  } | null
  quality?: {
    items?: { slug?: string | null; image?: StrapiMedia }[]
  } | null
  insights?: {
    imageQuality?: StrapiMedia
    imageIntegrity?: StrapiMedia
    imageInnovation?: StrapiMedia
    imageMain?: StrapiMedia
  } | null
  team?: {
    members?: { slug?: string | null; photo?: StrapiMedia }[]
  } | null
}

const ABOUT_MEDIA_KEY = 'agrofilAboutMedia'

const FALLBACK = {
  heroLeft: '/assets/69de034d2b999d08020122a8_About-banner-image-1.webp',
  heroRight: '/assets/69de034df524e64377c11ef0_About-banner-image-2.webp',
  impactProducts: '/assets/69ddf94d95965045bb0fc990_About-impact-1.svg',
  impactSuppliers: '/assets/69ddf94d8d5213dd54818a29_About-impact-2.svg',
  impactTeam: '/assets/69ddf94dc789083b038696dd_About-impact-3.svg',
  impactExport: '/assets/69ddf94db43a86373f5c123d_About-impact-4.svg',
  mission: '/assets/69dde6895fa6eeba0387001c_About-mission-1.webp',
  trustedLogos: [
    '/assets/69cc10309cc9dcae2400e65e_Trusted-1.svg',
    '/assets/69cc1034a6f6fb052c0af69d_Trusted-2.svg',
    '/assets/69cc1038073169af7046d249_Trusted-3.svg',
    '/assets/69cc10470af9c370da24e0c1_Trusted-4.svg',
    '/assets/69cc1064587e376282d8d1c9_Trusted-4 (2).svg',
    '/assets/69cc10506fff3a381f530b2a_Trusted-5.svg',
    '/assets/69cc107b44a8e246c0134136_Trusted-6.svg',
    '/assets/69cc10c94e2744d057ef0501_Trusted-6 (1).svg',
    '/assets/69cc108b819d764fddbc63b8_Trusted-7 (1).svg',
    '/assets/69cc1096ca0c787bd1fc531b_Trusted-8.svg',
  ],
  choose: {
    quality: '/assets/69de0e985773acc7b716baf1_About-image-aicsart-1.webp',
    innovation: '/assets/69de0e98064c6eb5b49d72bc_About-image-aicsart-2.webp',
    global: '/assets/69de0e98b39da8b6ab99a1eb_About-image-aicsart-3.webp',
  } as Record<string, string>,
  grow: {
    organic: '/assets/69de151acf3a0ad526961d0d_About-grow-imaig-1.webp',
    drip: '/assets/69de151a94501081a4db685e_About-grow-imaig-2.webp',
    chemical: '/assets/69de151adb3b9364e46861eb_About-grow-imaig-3.webp',
    micro: '/assets/69de1519b6d6751379a69753_About-grow-imaig-4.webp',
  } as Record<string, string>,
  quality: {
    organic: '/assets/69de36b9887076223f53c70e_About-quality-image-1.webp',
    chemical: '/assets/69de36b9bff662bd0d386aa0_About-quality-image-2.webp',
    drip: '/assets/69de36b90ae64da4c70ed751_About-quality-image-3.webp',
    micro: '/assets/69de36b981e3f63001f29de3_About-quality-image-4.webp',
    orgamineral: '/assets/69de36b992d8cb3921e10a72_About-quality-image-5.webp',
  } as Record<string, string>,
  insightsQuality: '/assets/69dde3461d9a18acd39e24e3_About-getting-insights-1.webp',
  insightsIntegrity: '/assets/69dde34638ee947ca327791c_About-getting-insights-2.webp',
  insightsInnovation: '/assets/69dde346eba96560fd099fff_About-getting-insights-3.webp',
  insightsMain: '/assets/69dde34678097df7eb66803e_About-getting-insights-4.webp',
  team: {
    mahir: '/assets/69d8d5ca9016eaefef00af65_Farmers-image-meet-1.webp',
    betul: '/assets/69d8d5cbde20939cf2fa156a_Farmers-image-meet-3.webp',
    wasim: '/assets/69d8d5cbb2864cfe815f2214_Farmers-image-meet-2.webp',
  } as Record<string, string>,
  teamByIndex: [
    '/assets/69d8d5ca9016eaefef00af65_Farmers-image-meet-1.webp',
    '/assets/69d8d5cbde20939cf2fa156a_Farmers-image-meet-3.webp',
    '/assets/69d8d5cbb2864cfe815f2214_Farmers-image-meet-2.webp',
  ],
}

function resolveFile(file: StrapiMedia, fallback: string) {
  const config = useRuntimeConfig()
  if (!file?.url) {
    return resolveMediaUrl(
      fallback,
      config.public.strapiUrl as string,
      config.public.assetsCdn as string,
    )
  }
  return resolveMediaUrl(
    file.url,
    config.public.strapiUrl as string,
    config.public.assetsCdn as string,
  )
}

function itemImage(
  items: { slug?: string | null; image?: StrapiMedia }[] | undefined,
  slug: string,
  fallbackMap: Record<string, string>,
) {
  const item = items?.find((i) => i.slug === slug)
  return resolveFile(item?.image, fallbackMap[slug] || '')
}

export type AboutMedia = ReturnType<typeof buildAboutMedia>

function buildAboutMedia(about: StrapiAbout | null | undefined) {
  return {
    heroLeft: resolveFile(about?.hero?.imageLeft, FALLBACK.heroLeft),
    heroRight: resolveFile(about?.hero?.imageRight, FALLBACK.heroRight),
    impactProducts: resolveFile(about?.impact?.iconProducts, FALLBACK.impactProducts),
    impactSuppliers: resolveFile(about?.impact?.iconSuppliers, FALLBACK.impactSuppliers),
    impactTeam: resolveFile(about?.impact?.iconTeam, FALLBACK.impactTeam),
    impactExport: resolveFile(about?.impact?.iconExport, FALLBACK.impactExport),
    missionImage: resolveFile(about?.mission?.image, FALLBACK.mission),
    trustedLogos: about?.trustedLogos?.length
      ? about.trustedLogos.map((l, i) =>
          resolveFile(l, FALLBACK.trustedLogos[i] || FALLBACK.trustedLogos[0]),
        )
      : FALLBACK.trustedLogos.map((f) => resolveFile(null, f)),
    chooseImage: (slug: string) => itemImage(about?.choose?.items, slug, FALLBACK.choose),
    growImage: (slug: string) => itemImage(about?.grow?.items, slug, FALLBACK.grow),
    qualityImage: (slug: string) => itemImage(about?.quality?.items, slug, FALLBACK.quality),
    insightsQuality: resolveFile(about?.insights?.imageQuality, FALLBACK.insightsQuality),
    insightsIntegrity: resolveFile(about?.insights?.imageIntegrity, FALLBACK.insightsIntegrity),
    insightsInnovation: resolveFile(about?.insights?.imageInnovation, FALLBACK.insightsInnovation),
    insightsMain: resolveFile(about?.insights?.imageMain, FALLBACK.insightsMain),
    teamPhoto: (slugOrIndex: string | number) => {
      if (typeof slugOrIndex === 'number') {
        const m = about?.team?.members?.[slugOrIndex]
        return resolveFile(
          m?.photo,
          FALLBACK.teamByIndex[slugOrIndex] || FALLBACK.teamByIndex[0],
        )
      }
      const m = about?.team?.members?.find((x) => x.slug === slugOrIndex)
      const idx = ['mahir', 'betul', 'wasim'].indexOf(slugOrIndex)
      return resolveFile(
        m?.photo,
        FALLBACK.team[slugOrIndex] || FALLBACK.teamByIndex[Math.max(0, idx)] || FALLBACK.teamByIndex[0],
      )
    },
  }
}

export function provideAboutMedia(
  about: Ref<StrapiAbout | null | undefined> | ComputedRef<StrapiAbout | null | undefined>,
) {
  const media = computed(() => buildAboutMedia(unref(about)))
  provide(ABOUT_MEDIA_KEY, media)
  return media
}

export function useAboutMedia() {
  return inject<ComputedRef<AboutMedia>>(
    ABOUT_MEDIA_KEY,
    computed(() => buildAboutMedia(null)),
  )
}
