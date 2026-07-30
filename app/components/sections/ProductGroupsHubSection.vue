<script setup lang="ts">
const { t, localePath, locale } = useCmsCopy()
const { localizedGroupName, localizedGroupDesc, groups: localGroups } = useProductCatalog()
const { groups: strapiGroups } = await useAsyncProductGroups(locale)

const groups = computed(() =>
  strapiGroups.value?.length ? strapiGroups.value : localGroups,
)

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
    { threshold: 0.12 },
  )
  io.observe(el)
})

onBeforeUnmount(() => {
  io?.disconnect()
})
</script>

<template>
  <section
    id="rt-product-groups"
    ref="root"
    class="rt-offerings rt-product-hub agro-enter-root"
  >
    <div class="w-layout-blockcontainer rt-container-main w-container">
      <div class="rt-center-content">
        <div class="rt-offerings-top rt-desktop-text-center">
          <div class="rt-sub-text-gap rt-overflow-hidden">
            <div class="rt-sub-text agro-enter agro-enter--d1">
              {{ t('products.hubEyebrow') }}
            </div>
          </div>
          <div class="rt-card-text-solide rt-overflow-hidden">
            <h2 class="rt-gap-off agro-enter agro-enter--d2">
              {{ t('products.hubTitle') }}
            </h2>
          </div>
        </div>

        <div class="rt-product-hub-grid">
          <NuxtLink
            v-for="(group, index) in groups"
            :key="group.slug"
            class="rt-offerings-item rt-product-hub-card w-inline-block"
            :to="localePath(`/products/${group.slug}`)"
          >
            <div
              class="rt-product-hub-card-inner agro-enter"
              :class="`agro-enter--d${Math.min(index + 1, 5)}`"
            >
              <div class="rt-offerings-item-icon">
                <img
                  alt=""
                  loading="lazy"
                  :src="group.icon"
                >
              </div>
              <div class="rt-offerings-item-content">
                <div class="rt-text-style-h5">
                  {{ localizedGroupName(group) }}
                </div>
                <div class="rt-product-hub-preview">
                  {{ group.previewText }}
                </div>
                <div class="rt-paragraph-color rt-product-hub-desc">
                  {{ localizedGroupDesc(group) }}
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
