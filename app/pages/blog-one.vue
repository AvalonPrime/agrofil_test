<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Harvestam - Webflow HTML website template',
  meta: [
    {
      name: 'description',
      content:
        'Explore our farming blog for expert tips, modern techniques, and sustainable practices to improve crop yield, soil health, and overall farm productivity in a simple and practical way.',
    },
  ],
  htmlAttrs: {
    lang: 'en',
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': '69ce2f713a3d66b54e9ee3f1',
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
  '/assets/js/webflow.61bcb0bc.dbcb5c7304af9fef.js',
])
</script>

<template>
  <PageShell>
    <main>
      <InnerBannerSection
        eyebrow="Blog"
        title="Latest news and updates in farming"
        anchor-href="#rt-blog-1"
        image-src="/assets/69e5e3d998ff9bf62f168377_Blog-one-banner.webp"
        image-srcset="/assets/69e5e3d998ff9bf62f168377_Blog-one-banner-p-500.webp 500w, /assets/69e5e3d998ff9bf62f168377_Blog-one-banner-p-800.webp 800w, /assets/69e5e3d998ff9bf62f168377_Blog-one-banner-p-1080.webp 1080w, /assets/69e5e3d998ff9bf62f168377_Blog-one-banner-p-1600.webp 1600w, /assets/69e5e3d998ff9bf62f168377_Blog-one-banner-p-2000.webp 2000w, /assets/69e5e3d998ff9bf62f168377_Blog-one-banner-p-2600.webp 2600w, /assets/69e5e3d998ff9bf62f168377_Blog-one-banner-p-3200.webp 3200w, /assets/69e5e3d998ff9bf62f168377_Blog-one-banner.webp 3840w"
        image-alt="Blog-one-banner"
      />
      <BlogListSection />
    </main>
    <CtaSection />
  </PageShell>
</template>
