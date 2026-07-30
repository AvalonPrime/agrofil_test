<script setup lang="ts">
definePageMeta({
  layout: "default",
})

useHead({
  title: "Harvestam - Webflow HTML website template",
  meta: [
    { name: 'description', content: "Stay updated with Harvestam\u2019s latest improvements, farming innovations, feature updates, and enhancements across the platform." },
  ],
  htmlAttrs: {
    lang: 'en',
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': "69ce2fc4b3359db6d43b72d8",
    'data-wf-site': "69ca70f522188cd4145a7334",
  },
  bodyAttrs: {
    class: 'w-mod-js',
  },
})

useWebflow(["/assets/js/jquery-3.5.1.min.dc5e7f18c8.js", "/assets/js/webflow.schunk.36b8fb49256177c8.js", "/assets/js/webflow.schunk.ad17b92b1fe67175.js", "/assets/js/webflow.61bcb0bc.dbcb5c7304af9fef.js"])
</script>

<template>
<ClientOnly>
  <div v-pre class="harvestam-markup">
    <main>
     <section class="rt-information-hero">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="w-layout-vflex rt-information-hero-main rt-overflow-hidden">
        <h1 class="rt-gap-off rt-text-color-white" data-w-id="b5ac624a-4d1e-c140-34c3-67a23f51a341" style="opacity:0">
         Changelog
        </h1>
       </div>
      </div>
     </section>
     <section class="rt-information-inner">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="w-layout-vflex rt-information-inner-main">
        <div class="rt-overflow-hidden">
         <div class="rt-image-center" data-w-id="eaae778d-d6f9-4504-6883-5bdf43caa55d" style="opacity:0">
          <img alt="" loading="lazy" src="/assets/69e1dff579d843e41d5cce2f_2b1fc9234455ef8428ff304de2b13c6f_Logo-black.svg"/>
         </div>
        </div>
        <div class="rt-overflow-hidden">
         <h2 class="rt-gap-off" data-w-id="dfc1ea69-d2d3-31b2-5105-5ee05f2cfd9e" style="opacity:0">
          Template Version 1.0
         </h2>
        </div>
        <div class="rt-overflow-hidden">
         <div data-w-id="dfc1ea69-d2d3-31b2-5105-5ee05f2cfda0" style="opacity:0">
          The template has been released!
         </div>
        </div>
        <div class="rt-overflow-hidden">
         <div data-w-id="88e7927a-3bbc-1bb9-2ec0-03be4ed64cb7" style="opacity:0">
          <a class="rt-button-box w-inline-block" data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd" data-wf--rt-button-green--variant="base" href="/changelog">
           <div class="rt-button-text-wrapper">
            <div class="rt-button-text rt-one">
             Back to home
            </div>
            <div class="rt-button-text rt-two">
             Back to home
            </div>
           </div>
           <div class="rt-button-icon-wrapper">
            <img alt="" class="rt-button-icon rt-1" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"/>
            <img alt="" class="rt-button-icon rt-2" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"/>
           </div>
           <div class="rt-button-bg">
           </div>
          </a>
         </div>
        </div>
       </div>
      </div>
     </section>
    </main>
    <div>
     <section class="rt-cta">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-cta-content">
        <div class="rt-cta-item" data-w-id="f06cc7df-2c93-fb7b-c73b-b615c63c648a">
         <h2 class="rt-gap-off rt-text-color-white">
          Discover the benefits of natural farming and fresh produce
         </h2>
         <a class="rt-button-box w-inline-block" data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd" data-wf--rt-button-green--variant="base" href="/contact">
          <div class="rt-button-text-wrapper">
           <div class="rt-button-text rt-one">
            Contact us now
           </div>
           <div class="rt-button-text rt-two">
            Contact us now
           </div>
          </div>
          <div class="rt-button-icon-wrapper">
           <img alt="" class="rt-button-icon rt-1" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"/>
           <img alt="" class="rt-button-icon rt-2" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"/>
          </div>
          <div class="rt-button-bg">
          </div>
         </a>
        </div>
       </div>
      </div>
     </section>
    </div>
  </div>
  <template #fallback>
    <div class="harvestam-markup harvestam-markup--loading" />
  </template>
</ClientOnly>
</template>
