/**
 * Content types modelled after Strapi REST shape
 * so UI can later swap static data for API responses with minimal changes.
 */

export interface StrapiMediaAttributes {
  url: string
  alternativeText?: string | null
  width?: number | null
  height?: number | null
  srcset?: string | null
}

export interface StrapiMedia {
  data: {
    id: number | string
    attributes: StrapiMediaAttributes
  } | null
}

export interface SeoMeta {
  metaTitle?: string
  metaDescription?: string
}

export interface BlogPostAttributes {
  slug: string
  title: string
  publishedAt: string
  excerpt?: string
  body?: string
  cover?: StrapiMedia
  seo?: SeoMeta
}

export interface BlogPost {
  id: number | string
  attributes: BlogPostAttributes
}

export interface ServiceAttributes {
  slug: string
  title: string
  description?: string
  cover?: StrapiMedia
  seo?: SeoMeta
}

export interface Service {
  id: number | string
  attributes: ServiceAttributes
}

export interface StrapiListResponse<T> {
  data: T[]
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export interface StrapiSingleResponse<T> {
  data: T | null
  meta: Record<string, unknown>
}
