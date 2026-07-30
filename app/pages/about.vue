<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Agrofil Gübre — About us',
  meta: [
    {
      name: 'description',
      content:
        'Agrofil is a Turkish fertilizer manufacturer established in 2019, producing granular, water-soluble and liquid plant nutrients for healthy crop growth worldwide.',
    },
  ],
  htmlAttrs: {
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': '69ce2f3417e227491b5485b7',
    'data-wf-site': '69ca70f522188cd4145a7334',
  },
  bodyAttrs: {
    class: 'w-mod-js',
  },
})

const { locale } = useAppI18n()
const { aboutCopy, about } = await useAsyncAboutContent(locale)
provideCmsCopy(aboutCopy)
provideAboutMedia(about)

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
  '/assets/js/webflow.61bcb0bc.dbcb5c7304af9fef.js',
])
</script>

<template>
  <PageShell>
    <main>
      <AboutHeroSection />
      <AboutImpactSection />
      <AboutMissionSection />
      <AboutTrustedSection />
      <AboutChooseSection />
      <AboutGrowSection />
      <AboutQualitySection />
      <AboutInsightsSection />
      <FarmersSection />
    </main>
    <CtaSection />
  </PageShell>
</template>
