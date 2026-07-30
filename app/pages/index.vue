<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Agrofil Gübre — Fertilizers for a healthier planet',
  meta: [
    {
      name: 'description',
      content:
        'Agrofil is a Turkish fertilizer manufacturer producing granular, water-soluble and liquid plant nutrients for healthier crops and sustainable agriculture.',
    },
  ],
  htmlAttrs: {
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': '69ce2ee9ff2d58ad3e854614',
    'data-wf-site': '69ca70f522188cd4145a7334',
  },
  bodyAttrs: {
    class: 'w-mod-js',
  },
})

const { locale } = useAppI18n()
const { homeCopy, home } = await useAsyncHomeContent(locale)
provideHomeCopy(homeCopy)
provideCmsCopy(homeCopy)
provideHomeMedia(home)

useHead(() => ({
  htmlAttrs: {
    lang: locale.value,
    dir: locale.value === 'ar' ? 'rtl' : 'ltr',
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
    <main>
      <HomeHeroSection />
      <HomeOfferingsSection />
      <HomeAboutSection />
      <TrustedSection />
      <HomeProductsSection />
      <HomeChooseSection />
      <HomeFocusSection />
      <HomeProcessSection />
      <HomeFarmingSection />
      <HomeImpactSection />
    </main>
    <CtaSection />
  </PageShell>
</template>
