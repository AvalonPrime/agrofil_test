import { resolveMediaUrl } from '~/utils/mediaUrl'

export type StrapiMedia = {
  url?: string | null
  alternativeText?: string | null
} | null

export type StrapiContact = {
  banner?: {
    image?: StrapiMedia
  } | null
}

const CONTACT_MEDIA_KEY = 'agrofilContactMedia'

const FALLBACK = {
  banner:
    '/assets/69d87c747245b11e90bcb18b_Contact-one-banner.webp',
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

export type ContactMedia = ReturnType<typeof buildContactMedia>

function buildContactMedia(contact: StrapiContact | null | undefined) {
  return {
    bannerImage: resolveFile(contact?.banner?.image, FALLBACK.banner),
  }
}

export function provideContactMedia(
  contact: Ref<StrapiContact | null | undefined> | ComputedRef<StrapiContact | null | undefined>,
) {
  const media = computed(() => buildContactMedia(unref(contact)))
  provide(CONTACT_MEDIA_KEY, media)
  return media
}

export function useContactMedia() {
  return inject<ComputedRef<ContactMedia>>(
    CONTACT_MEDIA_KEY,
    computed(() => buildContactMedia(null)),
  )
}
