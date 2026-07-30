<script setup lang="ts">
const { t } = useCmsCopy()
const media = useAboutMedia()

/** Extracted from about — rt-choose-v2 */
</script>

<template>
<section class="rt-choose-v2">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-center-content">
        <div class="rt-choose-v2-top rt-card-text-solide rt-desktop-text-center rt-overflow-hidden">
         <h2 class="rt-gap-off rt-text-color-white" data-w-id="bead142e-d901-f42c-f2a8-16ba1c19e7e3" style="opacity:0">
          {{ t('about.chooseTitle') }}
         </h2>
        </div>
        <div class="rt-choose-v2-wrapper">
         <div class="rt-choose-v2-item" data-w-id="fbe7b8ec-6d19-9f1d-e3f7-fb1db6296019" style="opacity:0">
          <div class="w-layout-hflex rt-choose-v2-item-left">
           <div class="rt-choose-v2-item-left-content">
            <div class="rt-text-style-h4 rt-text-color-white">
             {{ t('about.choose1') }}
            </div>
            <p class="rt-gap-off rt-text-color-white">
             {{ t('about.choose1Desc') }}
            </p>
           </div>
           <a aria-label="Choose Us" class="rt-choose-v2-item-box w-inline-block" href="/service-one">
            <div class="rt-image-center">
             <img alt="" loading="lazy" src="/assets/69dcdb539a9f30f23463d589_Blog-icon-right.svg"/>
            </div>
           </a>
          </div>
          <div class="rt-choose-v2-item-right rt-border-main rt-overflow-hidden">
           <img alt="About-image-aicsart-1" loading="lazy" sizes="100vw" :src="media.chooseImage('quality')"/>
          </div>
         </div>
         <div class="rt-choose-v2-item" data-w-id="992648c8-23d9-762c-b3c1-ad6622cdf4b9" style="opacity:0">
          <div class="w-layout-hflex rt-choose-v2-item-left">
           <div class="rt-choose-v2-item-left-content">
            <div class="rt-text-style-h4 rt-text-color-white">
             {{ t('about.choose2') }}
            </div>
            <p class="rt-gap-off rt-text-color-white">
             {{ t('about.choose2Desc') }}
            </p>
           </div>
           <a aria-label="Choose Us" class="rt-choose-v2-item-box w-inline-block" href="/service-one">
            <div class="rt-image-center">
             <img alt="" loading="lazy" src="/assets/69dcdb539a9f30f23463d589_Blog-icon-right.svg"/>
            </div>
           </a>
          </div>
          <div class="rt-choose-v2-item-right rt-border-main rt-overflow-hidden">
           <img alt="About-image-aicsart-2" loading="lazy" sizes="100vw" :src="media.chooseImage('innovation')"/>
          </div>
         </div>
         <div class="rt-choose-v2-item rt-border" data-w-id="315beef8-1f25-a364-1195-e18eea5e715e" style="opacity:0">
          <div class="w-layout-hflex rt-choose-v2-item-left">
           <div class="rt-choose-v2-item-left-content">
            <div class="rt-text-style-h4 rt-text-color-white">
             {{ t('about.choose3') }}
            </div>
            <p class="rt-gap-off rt-text-color-white">
             {{ t('about.choose3Desc') }}
            </p>
           </div>
           <a aria-label="Choose Uc" class="rt-choose-v2-item-box w-inline-block" href="/service-one">
            <div class="rt-image-center">
             <img alt="" loading="lazy" src="/assets/69dcdb539a9f30f23463d589_Blog-icon-right.svg"/>
            </div>
           </a>
          </div>
          <div class="rt-choose-v2-item-right rt-border-main rt-overflow-hidden">
           <img alt="About-image-aicsart-3" loading="lazy" sizes="100vw" :src="media.chooseImage('global')"/>
          </div>
         </div>
         <div class="rt-choose-v2-line rt-mobole-display-none" data-w-id="b019ca05-96fc-7d1c-c9eb-a269ec6fb1ef" style="opacity:0">
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
