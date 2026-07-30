import type { AppLocale } from '~/composables/useAppI18n'
import type { CatalogGroup, CatalogProduct } from '~/composables/useProductCatalog'

export type StrapiMedia = {
  id?: number
  documentId?: string
  url?: string
  alternativeText?: string | null
  name?: string
}

export type StrapiProductGroup = {
  id: number
  documentId: string
  name: string
  slug: string
  description?: string | null
  previewText?: string | null
  icon?: string | null
  sortOrder?: number
}

export type StrapiProduct = {
  id: number
  documentId: string
  name: string
  slug: string
  formulaLabel?: string | null
  excerpt?: string | null
  description?: string | null
  body?: string | null
  chemicalComposition?: string | null
  packSizes?: { label: string }[]
  dosageRows?: { plants?: string; dosage?: string; application?: string }[]
  sourceUrl?: string | null
  sortOrder?: number
  cover?: StrapiMedia | null
  gallery?: StrapiMedia[] | null
  group?: StrapiProductGroup | null
}

function strapiBase() {
  const config = useRuntimeConfig()
  return String(config.public.strapiUrl || '').replace(/\/$/, '')
}

function localeBag(value: string | null | undefined, locale: AppLocale) {
  const v = value || ''
  return {
    en: locale === 'en' ? v : '',
    tr: locale === 'tr' ? v : '',
    ar: locale === 'ar' ? v : '',
    ru: locale === 'ru' ? v : '',
  } as CatalogProduct['excerpt']
}

function mediaSrc(file: StrapiMedia | null | undefined, base: string) {
  if (!file?.url) return ''
  const url = file.url
  if (/^(https?:)?\/\//.test(url) || url.startsWith('data:')) return url
  if (!base) return url.startsWith('/') ? url : `/${url}`
  return `${base}${url.startsWith('/') ? url : `/${url}`}`
}

export function mapStrapiGroup(
  g: StrapiProductGroup,
  locale: AppLocale,
  productCount = 0,
): CatalogGroup {
  const name = localeBag(g.name, locale) as CatalogGroup['name']
  const description = localeBag(g.description || '', locale) as CatalogGroup['description']
  return {
    slug: g.slug,
    name,
    description,
    icon: g.icon || '/assets/69cb540467875138331f0a0d_Offerings-icon-1.svg',
    cover: '',
    productCount,
    previewNames: (g.previewText || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean),
    previewText: g.previewText || '',
  }
}

export function mapStrapiProduct(p: StrapiProduct, locale: AppLocale, base: string): CatalogProduct {
  const coverImage =
    mediaSrc(p.cover, base) ||
    mediaSrc(p.gallery?.[0], base) ||
    ''

  const images = (p.gallery?.length ? p.gallery : p.cover ? [p.cover] : []).map((img, i) => ({
    file: img.name || `image-${i + 1}`,
    src: mediaSrc(img, base),
    sourceUrl: '',
    alt: img.alternativeText || p.name,
  }))

  const excerptText = p.excerpt || p.description || ''
  const bodyText =
    p.body ||
    [p.description, p.chemicalComposition, ...(p.packSizes || []).map((x) => x.label)]
      .filter(Boolean)
      .join('\n\n')

  return {
    slug: p.slug,
    group: p.group?.slug || '',
    name: p.name,
    url: p.sourceUrl || '',
    coverImage,
    images,
    excerpt: localeBag(excerptText, locale),
    body: localeBag(bodyText, locale),
    locales: [locale],
  }
}

export async function useAsyncProductGroups(locale: Ref<AppLocale> | AppLocale) {
  const localeRef = isRef(locale) ? locale : ref(locale)

  const { data, error, refresh, status } = await useAsyncData(
    () => `strapi-product-groups-${localeRef.value}`,
    async () => {
      const base = strapiBase()
      if (!base) return [] as CatalogGroup[]
      try {
        const res = await $fetch<{ data: StrapiProductGroup[] }>(`${base}/api/product-groups`, {
          query: {
            locale: localeRef.value,
            sort: 'sortOrder:asc',
            'pagination[pageSize]': 50,
          },
        })
        return (res.data || []).map((g) => mapStrapiGroup(g, localeRef.value))
      } catch (err) {
        console.warn('[products] groups fetch failed', err)
        return [] as CatalogGroup[]
      }
    },
    { watch: [localeRef] },
  )

  return { groups: data, error, refresh, status }
}

export async function useAsyncProductsByGroup(
  groupSlug: Ref<string> | string,
  locale: Ref<AppLocale> | AppLocale,
) {
  const localeRef = isRef(locale) ? locale : ref(locale)
  const slugRef = isRef(groupSlug) ? groupSlug : ref(groupSlug)

  const { data, error, refresh, status } = await useAsyncData(
    () => `strapi-products-${slugRef.value}-${localeRef.value}`,
    async () => {
      const base = strapiBase()
      if (!base || !slugRef.value) return [] as CatalogProduct[]
      try {
        const res = await $fetch<{ data: StrapiProduct[] }>(`${base}/api/products`, {
          query: {
            locale: localeRef.value,
            'filters[group][slug][$eq]': slugRef.value,
            sort: 'sortOrder:asc',
            'pagination[pageSize]': 100,
            'populate[cover]': true,
            'populate[gallery]': true,
            'populate[group]': true,
            'populate[packSizes]': true,
          },
        })
        return (res.data || []).map((p) => mapStrapiProduct(p, localeRef.value, base))
      } catch (err) {
        console.warn('[products] list fetch failed', err)
        return [] as CatalogProduct[]
      }
    },
    { watch: [localeRef, slugRef] },
  )

  return { products: data, error, refresh, status }
}

export async function useAsyncProductBySlug(
  slug: Ref<string> | string,
  locale: Ref<AppLocale> | AppLocale,
) {
  const localeRef = isRef(locale) ? locale : ref(locale)
  const slugRef = isRef(slug) ? slug : ref(slug)

  const { data, error, refresh, status } = await useAsyncData(
    () => `strapi-product-${slugRef.value}-${localeRef.value}`,
    async () => {
      const base = strapiBase()
      if (!base || !slugRef.value) return null as CatalogProduct | null
      try {
        const res = await $fetch<{ data: StrapiProduct[] }>(`${base}/api/products`, {
          query: {
            locale: localeRef.value,
            'filters[slug][$eq]': slugRef.value,
            'pagination[pageSize]': 1,
            'populate[cover]': true,
            'populate[gallery]': true,
            'populate[packSizes]': true,
            'populate[dosageRows]': true,
            'populate[group]': true,
          },
        })
        const row = res.data?.[0]
        return row ? mapStrapiProduct(row, localeRef.value, base) : null
      } catch (err) {
        console.warn('[products] detail fetch failed', err)
        return null
      }
    },
    { watch: [localeRef, slugRef] },
  )

  return { product: data, error, refresh, status }
}

export async function useAsyncProductGroupBySlug(
  slug: Ref<string> | string,
  locale: Ref<AppLocale> | AppLocale,
) {
  const localeRef = isRef(locale) ? locale : ref(locale)
  const slugRef = isRef(slug) ? slug : ref(slug)

  const { data, error, refresh, status } = await useAsyncData(
    () => `strapi-product-group-${slugRef.value}-${localeRef.value}`,
    async () => {
      const base = strapiBase()
      if (!base || !slugRef.value) return null as CatalogGroup | null
      try {
        const res = await $fetch<{ data: StrapiProductGroup[] }>(`${base}/api/product-groups`, {
          query: {
            locale: localeRef.value,
            'filters[slug][$eq]': slugRef.value,
            'pagination[pageSize]': 1,
          },
        })
        const row = res.data?.[0]
        return row ? mapStrapiGroup(row, localeRef.value) : null
      } catch (err) {
        console.warn('[products] group fetch failed', err)
        return null
      }
    },
    { watch: [localeRef, slugRef] },
  )

  return { group: data, error, refresh, status }
}
