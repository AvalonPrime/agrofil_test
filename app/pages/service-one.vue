<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Agrofil Gübre — Product groups',
  meta: [
    {
      name: 'description',
      content:
        'Explore Agrofil fertilizer product groups: drip NPK, chemical, organic, orgamineral, microelements, straight and nitrogen fertilizers.',
    },
  ],
  htmlAttrs: {
    lang: 'en',
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': '69ce2f41ccb82fdb86b78515',
    'data-wf-site': '69ca70f522188cd4145a7334',
  },
  bodyAttrs: {
    class: 'w-mod-js',
  },
})

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
    <main>
      <ServiceInnerBannerSection />
      <ServiceOverviewSection />
      <ServiceGridSection />
      <ServiceImpactSection />
      <ServiceChooseSection />
      <ServiceVideoSection />
      <ServiceProductsSection />
      <ServiceProcessSection />
      <ServiceTrustedSection />
    </main>
    <CtaSection />
  </PageShell>
</template>
