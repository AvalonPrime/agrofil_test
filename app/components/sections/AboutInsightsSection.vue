<script setup lang="ts">
const { t } = useCmsCopy()
const media = useAboutMedia()

/** Extracted from about — rt-farming-insights */
</script>

<template>
<section class="rt-farming-insights">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="w-layout-hflex rt-farming-insights-wrapper">
        <div class="rt-farming-insights-left">
         <div class="rt-farming-insights-heading">
          <div class="rt-eco-v1-top">
           <div class="rt-sub-text-gap rt-overflow-hidden">
            <div class="rt-sub-text" data-w-id="cb765b40-d8ed-389e-cad1-0e4ded1add2b" style="opacity:0">
             {{ t('about.insightsEyebrow') }}
            </div>
           </div>
           <div class="rt-heading-to-para rt-overflow-hidden">
            <h2 class="rt-gap-off" data-w-id="cb765b40-d8ed-389e-cad1-0e4ded1add2e" style="opacity:0">
             {{ t('about.insightsTitle') }}
            </h2>
           </div>
           <div>
            <p class="rt-gap-off" data-w-id="cb765b40-d8ed-389e-cad1-0e4ded1add31" style="opacity:0">
             {{ t('about.insightsText') }}
            </p>
           </div>
          </div>
         </div>
         <div class="w-layout-hflex rt-farming-insights-left-content">
          <div class="rt-farming-v1-item-inner" data-w-id="420fa365-3cf8-0517-f359-6f79508d8c28" style="opacity:0">
           <img alt="About-getting-insights-1" class="rt-organic-v1-image" loading="lazy" :src="media.insightsQuality" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"/>
           <div class="rt-image-blur-wrap">
            <div class="rt-farming-v1-overlay rt-v2">
             <div class="rt-text-color-white">
              {{ t('about.insightsQuality') }}
             </div>
            </div>
            <div class="rt-organic-v1-overlay-v2" style="opacity:0">
            </div>
           </div>
          </div>
          <div class="rt-farming-v1-item-inner" data-w-id="e301d469-b616-85f5-e554-9d592ec8fd78" style="opacity:0">
           <img alt="About-getting-insights-2" class="rt-organic-v1-image" loading="lazy" :src="media.insightsIntegrity" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"/>
           <div class="rt-image-blur-wrap">
            <div class="rt-farming-v1-overlay rt-v2">
             <div class="rt-text-color-white">
              {{ t('about.insightsIntegrity') }}
             </div>
            </div>
            <div class="rt-organic-v1-overlay-v2" style="opacity:0">
            </div>
           </div>
          </div>
          <div class="rt-farming-v1-item-inner" data-w-id="5c4789cf-7719-2a15-37fd-770cbc065530" style="opacity:0">
           <img alt="About-getting-insights-3" class="rt-organic-v1-image" loading="lazy" :src="media.insightsInnovation" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"/>
           <div class="rt-image-blur-wrap">
            <div class="rt-farming-v1-overlay rt-v2">
             <div class="rt-text-color-white">
              {{ t('about.insightsInnovation') }}
             </div>
            </div>
            <div class="rt-organic-v1-overlay-v2" style="opacity:0">
            </div>
           </div>
          </div>
         </div>
        </div>
        <div class="rt-farming-insights-right rt-border-main rt-overflow-hidden" data-w-id="fdc41724-e73d-a8e4-8eb0-19b6c7d15744" style="opacity:0">
         <img alt="About-getting-insights-4" loading="lazy" sizes="100vw" :src="media.insightsMain"/>
        </div>
       </div>
      </div>
     </section>
</template>
