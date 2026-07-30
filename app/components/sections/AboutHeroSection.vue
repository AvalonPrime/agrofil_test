<script setup lang="ts">
import { scheduleWebflowBoot } from '~/composables/useWebflow'

const { t } = useCmsCopy()
const media = useAboutMedia()

onMounted(() => {
  scheduleWebflowBoot('about-hero-mounted')
})
</script>

<template>
<section class="rt-hero-v4">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-center-content" data-w-id="3e73ff22-0d09-ca5c-1a17-13dde0e5fdf0">
        <div class="rt-hero-v4-top">
         <div class="rt-sub-text-gap rt-overflow-hidden">
          <div class="rt-sub-text rt-text-color-white" data-w-id="62bf5bc9-4efe-3a6b-696a-371c3147ac15" style="opacity:0">
           {{ t('about.heroEyebrow') }}
          </div>
         </div>
         <div class="rt-h1-button-gap">
          <h1 class="rt-gap-off rt-text-color-white" data-w-id="62bf5bc9-4efe-3a6b-696a-371c3147ac18" style="opacity:0">
           {{ t('about.heroTitle') }}
          </h1>
         </div>
         <div class="rt-overflow-hidden">
          <div data-w-id="62bf5bc9-4efe-3a6b-696a-371c3147ac1a" style="opacity:0">
           <a class="rt-button-box w-inline-block" data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd" data-wf--rt-button-green--variant="base" href="/service-one">
            <div class="rt-button-text-wrapper">
             <div class="rt-button-text rt-one">
              {{ t('about.heroCta') }}
             </div>
             <div class="rt-button-text rt-two">
              {{ t('about.heroCta') }}
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
        <div class="w-layout-hflex rt-hero-v4-wrapper">
         <div class="rt-hero-v4-left rt-overflow-hidden rt-border-main" data-w-id="6e3033d5-e012-37e1-a45f-86d72c2eecd2" style="opacity:0">
          <img alt="About-banner-image-1
    " class="rt-inner-banner-image" sizes="100vw" :src="media.heroLeft" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"/>
         </div>
         <div class="rt-hero-v4-right rt-border-main rt-overflow-hidden" data-w-id="33c6d3a0-c1e8-8c0e-fe30-8c874ff96450" style="opacity:0">
          <img alt="About-banner-image-2" class="rt-inner-banner-image" sizes="100vw" :src="media.heroRight" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1.3, 1.3, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"/>
          <div class="rt-hero-v4-right-inner">
           <div class="w-layout-vflex rt-hero-v4-right-item rt-border-main">
            <div class="rt-text-style-h6 rt-text-color-white">
             {{ t('about.heroCardTitle') }}
            </div>
            <div class="rt-text-color-white">
             {{ t('about.heroCardText') }}
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
