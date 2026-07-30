import type {
  BlogPost,
  Service,
  StrapiListResponse,
  StrapiSingleResponse,
} from '~/types/content'
import { blogPosts } from '~/data/blog-posts'
import { services } from '~/data/services'

/**
 * Content source abstraction — today reads local data/,
 * later swaps to Strapi without changing section components.
 */
export function useContentSource() {
  const config = useRuntimeConfig()

  async function listBlogPosts(): Promise<StrapiListResponse<BlogPost>> {
    // Future: await $fetch(`${config.public.strapiUrl}/api/blog-posts`)
    void config.public.strapiUrl
    return {
      data: blogPosts,
      meta: {
        pagination: {
          page: 1,
          pageSize: blogPosts.length,
          pageCount: 1,
          total: blogPosts.length,
        },
      },
    }
  }

  async function getBlogPostBySlug(
    slug: string,
  ): Promise<StrapiSingleResponse<BlogPost>> {
    void config.public.strapiUrl
    const post = blogPosts.find((item) => item.attributes.slug === slug) ?? null
    return { data: post, meta: {} }
  }

  async function listServices(): Promise<StrapiListResponse<Service>> {
    void config.public.strapiUrl
    return {
      data: services,
      meta: {
        pagination: {
          page: 1,
          pageSize: services.length,
          pageCount: 1,
          total: services.length,
        },
      },
    }
  }

  async function getServiceBySlug(
    slug: string,
  ): Promise<StrapiSingleResponse<Service>> {
    void config.public.strapiUrl
    const service = services.find((item) => item.attributes.slug === slug) ?? null
    return { data: service, meta: {} }
  }

  return {
    listBlogPosts,
    getBlogPostBySlug,
    listServices,
    getServiceBySlug,
  }
}
