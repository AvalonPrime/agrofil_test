<script setup lang="ts">
const { t } = useCmsCopy()
const media = useContactMedia()
</script>

<template>
<section class="rt-inner-banner">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-center-content rt-z">
        <div class="rt-inner-banner-content rt-desktop-text-center rt-contact-v1-main-heading">
         <div class="rt-sub-text-gap rt-overflow-hidden">
          <div class="rt-sub-text rt-text-color-white agro-enter agro-enter--d1">
           {{ t('contact.bannerEyebrow') }}
          </div>
         </div>
         <div class="rt-inner-banner-heading-buttom rt-overflow-hidden">
          <h1 class="rt-gap-off rt-text-color-white agro-enter agro-enter--d2">
           {{ t('contact.bannerTitle') }}
          </h1>
         </div>
         <div class="rt-inner-banner-buttom agro-enter agro-enter--d3">
          <div class="rt-image-center rt-overflow-hidden rt-hero-v2-botton-icon">
           <img alt="" class="rt-hero-v2-down-1" loading="lazy" src="/assets/69d34ab011d74b16920611d2_dowm-arrow.svg"/>
           <img alt="" class="rt-hero-v2-down-2" loading="lazy" src="/assets/69d34ab011d74b16920611d2_dowm-arrow.svg"/>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="rt-inner-banner-image-wrapper rt-overflow-hidden">
       <img alt="Contact banner" class="rt-inner-banner-image agro-enter-zoom" sizes="100vw" :src="media.bannerImage"/>
       <div class="rt-inner-banner-overlay">
       </div>
      </div>
     </section>
</template>
