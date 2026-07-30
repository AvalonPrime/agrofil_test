import catalog from '~/data/product-catalog.json'
import type { AppLocale } from '~/composables/useAppI18n'

export type CatalogGroup = {
  slug: string
  name: { en: string; tr: string; ar: string; ru?: string }
  description: { en: string; tr: string; ar: string; ru?: string }
  icon: string
  cover: string
  productCount: number
  previewNames: string[]
  previewText: string
}

export type CatalogProduct = {
  slug: string
  group: string
  name: string
  url: string
  coverImage: string
  images: { file: string; src: string; sourceUrl: string; alt: string }[]
  excerpt: { en: string; tr: string; ar: string; ru?: string }
  body: { en: string; tr: string; ar: string; ru?: string }
  locales: string[]
}

const localGroups = catalog.groups as CatalogGroup[]
const localProducts = catalog.products as CatalogProduct[]

export function useProductCatalog() {
  const { locale } = useAppI18n()

  const localizedGroupName = (group: CatalogGroup, loc?: AppLocale) => {
    const code = loc || locale.value
    return group.name[code] || group.name.en || Object.values(group.name).find(Boolean) || group.slug
  }

  const localizedGroupDesc = (group: CatalogGroup, loc?: AppLocale) => {
    const code = loc || locale.value
    return (
      group.description[code] ||
      group.description.en ||
      Object.values(group.description).find(Boolean) ||
      ''
    )
  }

  const localizedExcerpt = (product: CatalogProduct, loc?: AppLocale) => {
    const code = loc || locale.value
    return product.excerpt[code] || product.excerpt.en || Object.values(product.excerpt).find(Boolean) || ''
  }

  const localizedBody = (product: CatalogProduct, loc?: AppLocale) => {
    const code = loc || locale.value
    return product.body[code] || product.body.en || Object.values(product.body).find(Boolean) || ''
  }

  function getGroup(slug: string) {
    return localGroups.find((g) => g.slug === slug) || null
  }

  function getProductsByGroup(slug: string) {
    return localProducts.filter((p) => p.group === slug)
  }

  function getProduct(slug: string) {
    return localProducts.find((p) => p.slug === slug) || null
  }

  return {
    catalog,
    groups: localGroups,
    locale,
    localizedGroupName,
    localizedGroupDesc,
    localizedExcerpt,
    localizedBody,
    getGroup,
    getProductsByGroup,
    getProduct,
  }
}
