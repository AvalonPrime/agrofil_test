export type StrapiMedia = {
  id?: number
  documentId?: string
  url?: string
  name?: string
  alternativeText?: string | null
  mime?: string | null
  width?: number | null
  height?: number | null
}

export interface HomeTextCard {
  id?: number
  title: string
  description?: string | null
  slug?: string | null
  icon?: StrapiMedia | null
  image?: StrapiMedia | null
}

export interface HomeLabelItem {
  id?: number
  title: string
  slug?: string | null
  image?: StrapiMedia | null
}

export interface StrapiHomeHero {
  title?: string
  exploreButton?: string
  scrollHint?: string
  customersLabel?: string
  farmersLabel?: string
  joinButton?: string
  video?: StrapiMedia | null
  videoWebm?: StrapiMedia | null
  videoPoster?: StrapiMedia | null
  avatars?: StrapiMedia[] | null
}

export interface StrapiHomeOfferings {
  eyebrow?: string
  title?: string
  items?: HomeTextCard[]
}

export interface StrapiHomeMethods {
  eyebrow?: string
  title?: string
  viewButton?: string
  items?: HomeTextCard[]
}

export interface StrapiHomeAbout {
  productsLabel?: string
  soilLabel?: string
  title?: string
  paragraph1?: string
  paragraph2?: string
  viewMoreButton?: string
  harvestLabel?: string
  yearsLabel?: string
  sectionLabel?: string
  imagePrimary?: StrapiMedia | null
  imageSecondary?: StrapiMedia | null
}

export interface StrapiHomeTrusted {
  text?: string | null
  logos?: StrapiMedia[] | null
}

export interface StrapiHomeProducts {
  eyebrow?: string
  title?: string
  items?: HomeLabelItem[]
}

export interface StrapiHomeChoose {
  eyebrow?: string
  title?: string
  image?: StrapiMedia | null
  items?: HomeTextCard[]
}

export interface StrapiHomeFocus {
  word1?: string
  word2?: string
  word3?: string
  word4?: string
  image?: StrapiMedia | null
  items?: HomeTextCard[]
}

export interface StrapiHomeProcess {
  title?: string
  subtitle?: string
  viewButton?: string
  items?: HomeTextCard[]
}

export interface StrapiHomeImpact {
  title?: string
  text?: string
  yieldLabel?: string
  supportLabel?: string
  image?: StrapiMedia | null
  iconYield?: StrapiMedia | null
  iconSupport?: StrapiMedia | null
}

export interface StrapiHomeCta {
  title?: string
  buttonLabel?: string
  backgroundImage?: StrapiMedia | null
  overlayImage?: StrapiMedia | null
}

/** Nested Strapi 5 Home single-type payload. */
export interface StrapiHome {
  id?: number
  documentId?: string
  locale?: string
  hero?: StrapiHomeHero | null
  offerings?: StrapiHomeOfferings | null
  methods?: StrapiHomeMethods | null
  about?: StrapiHomeAbout | null
  trusted?: StrapiHomeTrusted | null
  trustedText?: string
  products?: StrapiHomeProducts | null
  choose?: StrapiHomeChoose | null
  focus?: StrapiHomeFocus | null
  process?: StrapiHomeProcess | null
  impact?: StrapiHomeImpact | null
  cta?: StrapiHomeCta | null
}

export type HomeCopyMap = Record<string, string>
