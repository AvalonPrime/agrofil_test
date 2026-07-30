<script setup lang="ts">
import { scheduleWebflowBoot } from '~/composables/useWebflow'

definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Agrofil Gübre — Contact',
  meta: [
    {
      name: 'description',
      content:
        'Contact Agrofil Gübre in Konya: Fevziçakmak Mah. 10762. Sok. A1-Blok No: 12C Karatay. Phone +90 552 634 44 43, agrofil@agrofil.com.tr.',
    },
  ],
  htmlAttrs: {
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': '69ce2f8c3a3d66b54e9edfc8',
    'data-wf-site': '69ca70f522188cd4145a7334',
  },
  bodyAttrs: {
    class: 'w-mod-js',
  },
})

const { locale } = useAppI18n()
const { contactCopy, contact } = await useAsyncContactContent(locale)
provideCmsCopy(contactCopy)
provideContactMedia(contact)

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
  '/assets/js/webflow.e7fbbd9c.333b55538e1f5031.js',
])

onMounted(() => {
  scheduleWebflowBoot('contact-page-mounted')
})
</script>

<template>
  <PageShell>
    <main>
      <ContactInnerBannerSection />
      <ContactReachOutSection />
      <ContactFaqSection />
    </main>
    <CtaSection />
  </PageShell>
</template>
