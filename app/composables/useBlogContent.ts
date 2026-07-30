import type { BlogPost } from '~/types/content'

export function useBlogContent() {
  const { listBlogPosts, getBlogPostBySlug } = useContentSource()

  const posts = useState<BlogPost[]>('blog-posts', () => [])
  const pending = ref(false)
  const error = ref<Error | null>(null)

  async function fetchPosts() {
    pending.value = true
    error.value = null
    try {
      const res = await listBlogPosts()
      posts.value = res.data
      return res
    } catch (err) {
      error.value = err as Error
      throw err
    } finally {
      pending.value = false
    }
  }

  async function fetchBySlug(slug: string) {
    pending.value = true
    error.value = null
    try {
      return await getBlogPostBySlug(slug)
    } catch (err) {
      error.value = err as Error
      throw err
    } finally {
      pending.value = false
    }
  }

  return {
    posts,
    pending,
    error,
    fetchPosts,
    fetchBySlug,
  }
}
