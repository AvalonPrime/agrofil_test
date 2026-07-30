<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const route = useRoute()
const { locale, t, localePath } = useAppI18n()
const {
  getGroup,
  getProductsByGroup,
  localizedGroupName,
  localizedGroupDesc,
} = useProductCatalog()

const slug = computed(() => String(route.params.slug || ''))
const { group: strapiGroup } = await useAsyncProductGroupBySlug(slug, locale)
const { products: strapiProducts } = await useAsyncProductsByGroup(slug, locale)

const group = computed(
  () => strapiGroup.value || getGroup(slug.value),
)
const products = computed(() =>
  strapiProducts.value?.length
    ? strapiProducts.value
    : getProductsByGroup(slug.value),
)

if (!group.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product group not found' })
}

useHead(() => ({
  title: `Agrofil — ${localizedGroupName(group.value!)}`,
  meta: [
    {
      name: 'description',
      content: localizedGroupDesc(group.value!),
    },
  ],
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value === 'ar' ? 'rtl' : 'ltr',
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': '69ce2f41ccb82fdb86b78515',
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
    <main v-if="group">
      <ProductCatalogBannerSection
        :eyebrow="t('products.listEyebrow')"
        :title="localizedGroupName(group)"
        :cta-label="t('products.backToGroups')"
        :cta-to="localePath('/products')"
      />
      <ProductGroupListSection
        :products="products"
        :eyebrow="localizedGroupName(group)"
        :title="localizedGroupDesc(group)"
      />
    </main>
    <CtaSection />
  </PageShell>
</template>
