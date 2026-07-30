<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const route = useRoute()
const { locale } = useAppI18n()
const { getProduct, localizedExcerpt } = useProductCatalog()

const slug = computed(() => String(route.params.slug || ''))
const { product: strapiProduct } = await useAsyncProductBySlug(slug, locale)

const product = computed(() => strapiProduct.value || getProduct(slug.value))

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

useHead(() => ({
  title: `Agrofil — ${product.value!.name}`,
  meta: [
    {
      name: 'description',
      content: localizedExcerpt(product.value!) || product.value!.name,
    },
  ],
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value === 'ar' ? 'rtl' : 'ltr',
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': '69dcb21ac4fab7e300e81e77',
    'data-wf-site': '69ca70f522188cd4145a7334',
  },
  bodyAttrs: {
    class: 'w-mod-js',
  },
}))

useWebflow([
  '/assets/js/jquery-3.5.1.min.dc5e7f18c8.js',
  '/assets/js/webflow.schunk.36b8fb49256177c8.js',
  '/assets/js/webflow.schunk.ad17b92b1fe67175.js',
  '/assets/js/webflow.schunk.9dfb96661114d3db.js',
  '/assets/js/webflow.ba5fae89.63a0615f3ce5ac83.js',
])
</script>

<template>
  <PageShell>
    <main v-if="product">
      <ProductDetailSection :product="product" />
    </main>
    <CtaSection />
  </PageShell>
</template>
