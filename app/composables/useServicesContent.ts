import type { Service } from '~/types/content'
import { services } from '~/data/services'

export function useServicesContent() {
  const { public: { strapiUrl } } = useRuntimeConfig()
  const items = useState<Service[]>('services', () => [])
  const pending = ref(false)
  const error = ref<Error | null>(null)

  async function fetchServices() {
    pending.value = true
    error.value = null
    try {
      // Future: await $fetch(`${strapiUrl}/api/services`)
      void strapiUrl
      items.value = services
      return { data: services, meta: {} }
    } catch (err) {
      error.value = err as Error
      throw err
    } finally {
      pending.value = false
    }
  }

  async function fetchBySlug(slug: string) {
    await fetchServices()
    return items.value.find((s) => s.attributes.slug === slug) ?? null
  }

  return { items, pending, error, fetchServices, fetchBySlug }
}
