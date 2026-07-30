<script setup lang="ts">
const { t } = useHomeCopy()
const media = useHomeMedia()

/**
 * Extracted from home-one — Products block.
 * Markup preserves Webflow classes / data-w-id for IX2.
 */
</script>

<template>
<section class="rt-products">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-products-heading rt-card-text-solide">
        <div class="rt-sub-text-gap rt-overflow-hidden">
         <div class="rt-sub-text" data-w-id="4bbca8a6-a0d1-9f39-7e11-9470e06184af">
          {{ t('home.productsEyebrow') }}
         </div>
        </div>
        <div class="rt-overflow-hidden">
         <h2 class="rt-gap-off" data-w-id="4bbca8a6-a0d1-9f39-7e11-9470e06184b2">
          {{ t('home.productsTitle') }}
         </h2>
        </div>
       </div>
       <div class="rt-products-wrapper">
        <div class="rt-products-row-1 rt-overflow-hidden">
         <div class="rt-products-item rt-overflow-hidden rt-border-main" data-w-id="4bbca8a6-a0d1-9f39-7e11-9470e06184b6">
          <img alt="Products-image-1" class="rt-products-image" loading="lazy" sizes="100vw" :src="media.productImage('drip')"/>
          <div class="rt-products-item-overlay">
           <div class="rt-text-style-h4 rt-text-color-white">
            {{ t('home.productsDrip') }}
           </div>
          </div>
         </div>
         <div class="rt-products-item rt-overflow-hidden rt-border-main" data-w-id="4bbca8a6-a0d1-9f39-7e11-9470e06184bb">
          <img alt="Products-2" class="rt-products-image" loading="lazy" sizes="100vw" :src="media.productImage('organic')"/>
          <div class="rt-products-item-overlay">
           <div class="rt-text-style-h4 rt-text-color-white">
            {{ t('home.productsOrganic') }}
           </div>
          </div>
         </div>
        </div>
        <div class="rt-products-row-2 rt-overflow-hidden">
         <div class="rt-products-item rt-overflow-hidden rt-border-main" data-w-id="4bbca8a6-a0d1-9f39-7e11-9470e06184c1">
          <img alt="Products-3" class="rt-products-image" loading="lazy" sizes="100vw" :src="media.productImage('chemical')"/>
          <div class="rt-products-item-overlay">
           <div class="rt-text-style-h4 rt-text-color-white">
            {{ t('home.productsChemical') }}
           </div>
          </div>
         </div>
         <div class="rt-products-item rt-overflow-hidden rt-border-main" data-w-id="4bbca8a6-a0d1-9f39-7e11-9470e06184c6">
          <img alt="Products-4" class="rt-products-image" loading="lazy" sizes="100vw" :src="media.productImage('micro')"/>
          <div class="rt-products-item-overlay">
           <div class="rt-text-style-h4 rt-text-color-white">
            {{ t('home.productsMicro') }}
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="rt-mobile-slider">
        <div class="rt-process-mobile-slider w-slider" data-animation="slide" data-autoplay="false" data-autoplay-limit="0" data-delay="4000" data-disable-swipe="false" data-duration="500" data-easing="ease" data-hide-arrows="false" data-infinite="true" data-nav-spacing="3" data-w-id="abef0a53-5beb-ce7e-3fe8-aaed1864aee0">
         <div class="rt-process-mobile-mask w-slider-mask">
          <div class="rt-process-mobile-slider-width w-slide">
           <div class="rt-products-item rt-overflow-hidden rt-border-main" data-w-id="9c925b46-1117-0759-9f02-e8315549a158">
            <img alt="Products-image-1" class="rt-products-image" loading="lazy" sizes="100vw" :src="media.productImage('drip')"/>
            <div class="rt-products-item-overlay">
             <div class="rt-text-style-h4 rt-text-color-white">
              {{ t('home.productsDrip') }}
             </div>
            </div>
           </div>
          </div>
          <div class="rt-process-mobile-slider-width w-slide">
           <div class="rt-products-item rt-overflow-hidden rt-border-main" data-w-id="c572a9e8-0237-bdde-db2a-408b6dadac23">
            <img alt="Products-2" class="rt-products-image" loading="lazy" sizes="100vw" :src="media.productImage('organic')"/>
            <div class="rt-products-item-overlay">
             <div class="rt-text-style-h4 rt-text-color-white">
              {{ t('home.productsOrganic') }}
             </div>
            </div>
           </div>
          </div>
          <div class="rt-process-mobile-slider-width w-slide">
           <div class="rt-products-item rt-overflow-hidden rt-border-main" data-w-id="c57f87d0-e9b6-a5bb-270e-d459b123406f">
            <img alt="Products-3" class="rt-products-image" loading="lazy" sizes="100vw" :src="media.productImage('chemical')"/>
            <div class="rt-products-item-overlay">
             <div class="rt-text-style-h4 rt-text-color-white">
              {{ t('home.productsChemical') }}
             </div>
            </div>
           </div>
          </div>
          <div class="rt-process-mobile-slider-width w-slide">
           <div class="rt-products-item rt-overflow-hidden rt-border-main" data-w-id="cbd1323a-f698-6cb2-4122-7491e719e649">
            <img alt="Products-4" class="rt-products-image" loading="lazy" sizes="100vw" :src="media.productImage('micro')"/>
            <div class="rt-products-item-overlay">
             <div class="rt-text-style-h4 rt-text-color-white">
              {{ t('home.productsMicro') }}
             </div>
            </div>
           </div>
          </div>
         </div>
         <div class="rt-process-mobile-slider-dot w-slider-nav w-slider-nav-invert w-shadow w-round">
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
