import type { StrapiHome, StrapiMedia } from '~/types/home'
import { resolveMediaUrl } from '~/utils/mediaUrl'

const HOME_MEDIA_KEY = 'agrofilHomeMedia'

const FALLBACK = {
  heroVideo: '/assets/69d4f1d47d770a31c4ca3826_168401-839220651_medium_mp4.mp4',
  heroWebm: '/assets/69d4f1d47d770a31c4ca3826_168401-839220651_medium_webm.webm',
  heroPoster:
    '/assets/69d4f1d47d770a31c4ca3826_168401-839220651_medium_poster.0000000.jpg',
  avatars: [
    '/assets/69cb664245818e3bc31c69da_Autor-1.webp',
    '/assets/69cb6651d30ca58ab34326d9_Autor-2.webp',
    '/assets/69cb66429f69e2ae673fb90b_Autor-3.webp',
  ],
  offerings: {
    drip: '/assets/69cb540467875138331f0a0d_Offerings-icon-1.svg',
    chemical: '/assets/69cb54047cf4e0a319d6ec2a_Offerings-icon-2.svg',
    organic: '/assets/69cb54046b59c32110fa211a_Offerings-icon-3.svg',
    orgamineral: '/assets/69cb5404bfc62b4bd323af17_Offerings-icon-4.svg',
    micro: '/assets/69cb54048000bba55925c8b5_Offerings-icon-5.svg',
  } as Record<string, string>,
  aboutPrimary: '/assets/69cbb3f27d3b241357e0cac5_About-image-a1.webp',
  aboutSecondary: '/assets/69cbb3f25d6a355af5df7614_About-image-a2.webp',
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
  products: {
    drip: '/assets/69cbe00640d756d80d54da11_Products-image-1.webp',
    organic: '/assets/69cbe004dda34ef656574b68_Products-2.webp',
    chemical: '/assets/69cbe000148a72108f964a98_Products-3.webp',
    micro: '/assets/69cbdffdb7408bb5ec282367_Products-4.webp',
  } as Record<string, string>,
  choose: '/assets/69cbfae914f10becea2e5ad8_Choose-image-1.webp',
  focusMain: '/assets/69ccafbcc8c125f01d7961a3_Focus-image.webp',
  focus: {
    eco: '/assets/69ccafbcc8c125f01d7961a3_Focus-image.webp',
    balanced: '/assets/69e877866466fbd0717e8198_Home-card-image2.webp',
    quality: '/assets/69e87786129cfe31ddd732f8_Home-card-image3.webp',
  } as Record<string, string>,
  process: {
    soil: '/assets/69cc9e88873508134610e2aa_Process-icon-1.svg',
    nutrient: '/assets/69cc9e885f9f525f55e62029_Process-icon-2.svg',
    yields: '/assets/69cc9e874e4a2a002a8deebc_Process-icon-6.svg',
    balanced: '/assets/69cc9e8757e933df6e2ef531_Process-icon-5.svg',
    drip: '/assets/69cc9e87369ca382c7adc363_Process-icon-3.svg',
    micro: '/assets/69cc9e8701c8d7bb510126dd_Process-icon-4.svg',
  } as Record<string, string>,
  farming: {
    organic: '/assets/69cbc33e15f70683a8578ebd_Farming-image-1.webp',
    chemical: '/assets/69cbc33eeba12c6dabc1b84d_Farming-image-2.webp',
    drip: '/assets/69cbc33eff6d80c40e8bdbd5_Farming-image-3.webp',
    micro: '/assets/69cbc33eeba12c6dabc1b84d_Farming-image-2.webp',
    orgamineral: '/assets/69cbc33e15f70683a8578ebd_Farming-image-1.webp',
  } as Record<string, string>,
  impact: '/assets/69cb913a45565f6f9876b4f1_Improving-image-main.webp',
  impactYield: '/assets/69cb92b358f42df66dcce642_Improving-icon-1.svg',
  impactSupport: '/assets/69cb92b3aee9b8e2e58528b3_Improving-icon-2.svg',
  ctaBg: '/assets/69dcb1e13b7796e93cb90166_CTA-image.webp',
  ctaOverlay: '/assets/69e5d07870644466e9f3872c_Rectangle-1.webp',
}

function resolveFile(file: StrapiMedia | null | undefined, fallback: string) {
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

function itemMedia(
  items: { slug?: string | null; icon?: StrapiMedia | null; image?: StrapiMedia | null }[] | undefined,
  slug: string,
  field: 'icon' | 'image',
  fallbackMap: Record<string, string>,
) {
  const item = items?.find((i) => i.slug === slug)
  const file = field === 'icon' ? item?.icon : item?.image
  return resolveFile(file, fallbackMap[slug] || '')
}

export type HomeMedia = ReturnType<typeof buildHomeMedia>

function buildHomeMedia(home: StrapiHome | null | undefined) {
  return {
    heroVideo: resolveFile(home?.hero?.video, FALLBACK.heroVideo),
    heroWebm: resolveFile(home?.hero?.videoWebm, FALLBACK.heroWebm),
    heroPoster: resolveFile(home?.hero?.videoPoster, FALLBACK.heroPoster),
    avatars: (home?.hero?.avatars?.length
      ? home.hero.avatars.map((a, i) => resolveFile(a, FALLBACK.avatars[i] || FALLBACK.avatars[0]))
      : FALLBACK.avatars.map((f) => resolveFile(null, f))),
    offeringIcon: (slug: string) =>
      itemMedia(home?.offerings?.items, slug, 'icon', FALLBACK.offerings),
    aboutPrimary: resolveFile(home?.about?.imagePrimary, FALLBACK.aboutPrimary),
    aboutSecondary: resolveFile(home?.about?.imageSecondary, FALLBACK.aboutSecondary),
    trustedLogos: (home?.trusted?.logos?.length
      ? home.trusted.logos.map((l, i) =>
          resolveFile(l, FALLBACK.trustedLogos[i] || FALLBACK.trustedLogos[0]),
        )
      : FALLBACK.trustedLogos.map((f) => resolveFile(null, f))),
    productImage: (slug: string) =>
      itemMedia(home?.products?.items, slug, 'image', FALLBACK.products),
    chooseImage: resolveFile(home?.choose?.image, FALLBACK.choose),
    focusMain: resolveFile(home?.focus?.image, FALLBACK.focusMain),
    focusImage: (slug: string) => itemMedia(home?.focus?.items, slug, 'image', FALLBACK.focus),
    processIcon: (slug: string) =>
      itemMedia(home?.process?.items, slug, 'icon', FALLBACK.process),
    farmingImage: (slug: string) =>
      itemMedia(home?.methods?.items, slug, 'image', FALLBACK.farming),
    impactImage: resolveFile(home?.impact?.image, FALLBACK.impact),
    impactYield: resolveFile(home?.impact?.iconYield, FALLBACK.impactYield),
    impactSupport: resolveFile(home?.impact?.iconSupport, FALLBACK.impactSupport),
    ctaBg: resolveFile(home?.cta?.backgroundImage, FALLBACK.ctaBg),
    ctaOverlay: resolveFile(home?.cta?.overlayImage, FALLBACK.ctaOverlay),
  }
}

export function provideHomeMedia(home: Ref<StrapiHome | null | undefined> | ComputedRef<StrapiHome | null | undefined>) {
  const media = computed(() => buildHomeMedia(unref(home)))
  provide(HOME_MEDIA_KEY, media)
  return media
}

export function useHomeMedia() {
  return inject<ComputedRef<HomeMedia>>(
    HOME_MEDIA_KEY,
    computed(() => buildHomeMedia(null)),
  )
}
