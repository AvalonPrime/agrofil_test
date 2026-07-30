<script setup lang="ts">
import type { CatalogProduct } from '~/composables/useProductCatalog'

const props = defineProps<{
  product: CatalogProduct
}>()

const { localePath } = useCmsCopy()
const { localizedExcerpt, getGroup, localizedGroupName } = useProductCatalog()

const href = computed(() => localePath(`/product/${props.product.slug}`))
const group = computed(() => getGroup(props.product.group))
</script>

<template>
  <div
    class="w-dyn-item"
    role="listitem"
  >
    <div class="w-layout-vflex rt-blog-v1-item rt-product-card">
      <NuxtLink
        aria-label="product image"
        class="rt-border-main rt-overflow-hidden rt-product-card-media w-inline-block"
        :to="href"
      >
        <img
          :alt="product.name"
          class="rt-scale-image rt-product-card-image"
          loading="lazy"
          :src="product.coverImage"
        >
      </NuxtLink>
      <div class="rt-blog-v1-item-content-wrap">
        <div class="rt-blog-v1-item-content">
          <div class="w-layout-hflex rt-calendar-wrap">
            <div class="rt-image-center">
              <img
                alt=""
                loading="lazy"
                src="/assets/69cb540467875138331f0a0d_Offerings-icon-1.svg"
              >
            </div>
            <div class="rt-blog-date-top-gap">
              <div class="rt-sub-text rt-text-color-green">
                {{ group ? localizedGroupName(group) : product.group }}
              </div>
            </div>
          </div>
          <NuxtLink
            aria-label="product title"
            class="rt-text-style-h4"
            :to="href"
          >
            {{ product.name }}
          </NuxtLink>
          <div class="rt-paragraph-color rt-product-card-excerpt">
            {{ localizedExcerpt(product) }}
          </div>
        </div>
        <NuxtLink
          aria-label="Open product"
          class="rt-blog-v1-item-button w-inline-block"
          :to="href"
        >
          <div class="rt-center-content rt-blog-v1-item-icon rt-overflow-hidden">
            <img
              alt=""
              class="rt-blog-v1-icon-1"
              loading="lazy"
              src="/assets/69dcd5d24cf5716e80cddfee_Blog-icon-v1.svg"
            >
            <img
              alt=""
              class="rt-blog-v1-icon-2"
              loading="lazy"
              src="/assets/69dcd5d24cf5716e80cddfee_Blog-icon-v1.svg"
            >
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
