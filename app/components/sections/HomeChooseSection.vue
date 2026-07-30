<script setup lang="ts">
const { t } = useHomeCopy()
const media = useHomeMedia()

/**
 * Extracted from home-one — Why choose block.
 * Markup preserves Webflow classes / data-w-id for IX2.
 */
</script>

<template>
<section class="rt-choose">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-choose-wrap">
        <div class="rt-choose-left" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd2e" style="opacity:0">
         <img alt="Choose-image-1" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.chooseImage">
        </div>
        <div class="rt-choose-right">
         <div class="rt-choose-heading">
          <div class="rt-sub-text-gap rt-overflow-hidden">
           <div class="rt-sub-text rt-text-color-white" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd33" style="opacity:0">
            {{ t('home.chooseEyebrow') }}
           </div>
          </div>
          <div class="rt-overflow-hidden">
           <h2 class="rt-gap-off rt-text-color-white" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd36" style="opacity:0">
            {{ t('home.chooseTitle') }}
           </h2>
          </div>
         </div>
         <div class="rt-choose-content">
          <div class="rt-choose-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd39" style="opacity:0">
           <div class="rt-choose-item-top">
            <div class="rt-text-style-h5 rt-text-color-white">
             {{ t('home.chooseQuality') }}
            </div>
            <div class="rt-sub-text rt-text-color-white">
             01
            </div>
           </div>
           <p class="rt-gap-off rt-text-color-white">
            {{ t('home.chooseQualityDesc') }}
           </p>
          </div>
          <div class="rt-choose-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd41" style="opacity:0">
           <div class="rt-choose-item-top">
            <div class="rt-text-style-h5 rt-text-color-white">
             {{ t('home.chooseIntegrity') }}
            </div>
            <div class="rt-sub-text rt-text-color-white">
             02
            </div>
           </div>
           <p class="rt-gap-off rt-text-color-white">
            {{ t('home.chooseIntegrityDesc') }}
           </p>
          </div>
          <div class="rt-choose-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd49" style="opacity:0">
           <div class="rt-choose-item-top">
            <div class="rt-text-style-h5 rt-text-color-white">
             {{ t('home.chooseInnovation') }}
             <br/>
            </div>
            <div class="rt-sub-text rt-text-color-white">
             03
            </div>
           </div>
           <p class="rt-gap-off rt-text-color-white">
            {{ t('home.chooseInnovationDesc') }}
           </p>
          </div>
          <div class="rt-choose-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd52" style="opacity:0">
           <div class="rt-choose-item-top">
            <div class="rt-text-style-h5 rt-text-color-white">
             {{ t('home.chooseGlobal') }}
            </div>
            <div class="rt-sub-text rt-text-color-white">
             04
            </div>
           </div>
           <p class="rt-gap-off rt-text-color-white">
            {{ t('home.chooseGlobalDesc') }}
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
