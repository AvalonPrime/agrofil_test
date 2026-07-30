<script setup lang="ts">
import type { CatalogProduct } from '~/composables/useProductCatalog'

defineProps<{
  products: CatalogProduct[]
  eyebrow?: string
  title?: string
}>()

const { t } = useCmsCopy()

const root = ref<HTMLElement | null>(null)
let io: IntersectionObserver | null = null

onMounted(() => {
  const el = root.value
  if (!el || !import.meta.client) return
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          el.classList.add('agro-enter-root--visible')
          io?.disconnect()
        }
      }
    },
    { threshold: 0.08 },
  )
  io.observe(el)
})

onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <section
    id="rt-product-list"
    ref="root"
    class="rt-blog-gap rt-product-list agro-enter-root"
  >
    <PageContainer>
      <div class="rt-product-list-heading rt-desktop-text-center agro-enter agro-enter--d1">
        <div class="rt-sub-text-gap">
          <div class="rt-sub-text">
            {{ eyebrow || t('products.listEyebrow') }}
          </div>
        </div>
        <h2 class="rt-gap-off">
          {{ title || t('products.listTitle') }}
        </h2>
      </div>

      <div class="w-dyn-list agro-enter agro-enter--d2">
        <div
          class="rt-blog-v1-wrap rt-product-card-grid w-dyn-items"
          role="list"
        >
          <ProductCard
            v-for="product in products"
            :key="product.slug"
            :product="product"
          />
        </div>
      </div>
    </PageContainer>
  </section>
</template>
