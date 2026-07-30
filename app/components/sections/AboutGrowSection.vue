<script setup lang="ts">
const { t } = useCmsCopy()
const media = useAboutMedia()

/** Extracted from about — rt-grow-v2 */
</script>

<template>
<section class="rt-grow-v2">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-grow-v2-height" data-w-id="53d0d5eb-7366-e308-f06a-b7a9dda046f3">
        <div class="rt-grow-v2-wrap">
         <div class="rt-grow-v2-left rt-overflow-hidden" data-w-id="08643628-4463-4f66-2dd7-76710f33c8c1" style="opacity:0">
          <div class="rt-grow-v2-image-1" data-w-id="9003615c-b8ce-f9ad-69ff-de754ee52670">
           <img alt="About-grow-imaig-1" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.growImage('organic')"/>
          </div>
          <div class="rt-grow-v2-image-2" data-w-id="7651b8f7-b491-f8ce-8672-299f96513d0b">
           <img alt="About-grow-imaig-2" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.growImage('drip')"/>
          </div>
          <div class="rt-grow-v2-image-3" data-w-id="ccacf9b7-e66f-ec97-b3e2-2c0298568146">
           <img alt="About-grow-imaig-3" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.growImage('chemical')"/>
          </div>
          <div class="rt-grow-v2-image-4" data-w-id="01baf208-c9af-ce57-a4d9-b2c8675360c4">
           <img alt="About-grow-imaig-4" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.growImage('micro')"/>
          </div>
         </div>
         <div class="w-layout-vflex rt-grow-v2-right" id="w-node-fb4bba4c-09ce-c74c-58a7-9f3f06c80d41-1b5485b7">
          <div class="rt-grow-v2-right-top rt-landscape-text-center">
           <div class="rt-sub-text-gap rt-overflow-hidden">
            <div class="rt-sub-text rt-text-color-white" data-w-id="5879d919-3847-9e9c-189e-01b825fcedf0" style="opacity:0">
             {{ t('about.growEyebrow') }}
            </div>
           </div>
           <div class="rt-heading-to-para rt-overflow-hidden">
            <h2 class="rt-gap-off rt-text-color-white" data-w-id="5879d919-3847-9e9c-189e-01b825fcedf3" style="opacity:0">
             {{ t('about.growTitle') }}
            </h2>
           </div>
           <div class="rt-grow-v2-right-para rt-overflow-hidden">
            <p class="rt-gap-off rt-text-color-white" data-w-id="5879d919-3847-9e9c-189e-01b825fcedf6" style="opacity:0">
             {{ t('about.growText') }}
            </p>
           </div>
          </div>
          <div class="rt-grow-v2-right-content">
           <div class="rt-grow-v2-right-item" data-w-id="0abf3c07-ddbb-3f7d-a8f9-74edf39a9e02" style="opacity:0">
            <div class="rt-grow-v2-right-item-inner">
             <div class="rt-text-style-h4 rt-grow-v2-text-1">
              {{ t('about.growOrganic') }}
             </div>
             <div class="rt-sub-text rt-grow-v2-text-1">
              01
             </div>
            </div>
            <div class="rt-grow-v2-right-overlay">
             <div class="rt-grow-v2-right-inner">
             </div>
            </div>
            <div class="rt-grow-v2-right-overlay-v2" data-w-id="ec3ee8bf-32aa-23b6-e5bb-ba54f8e8b804">
             <div class="rt-grow-v2-right-inner">
             </div>
            </div>
           </div>
           <div class="rt-grow-v2-right-item" data-w-id="4eb55ccc-050d-2f62-1c51-7d06733d4b6d" style="opacity:0">
            <div class="rt-grow-v2-right-item-inner">
             <div class="rt-text-style-h4 rt-grow-v2-text-2">
              {{ t('about.growDrip') }}
             </div>
             <div class="rt-sub-text rt-grow-v2-text-2">
              02
             </div>
            </div>
            <div class="rt-grow-v2-right-overlay-v2" data-w-id="a9890da4-7f0e-a22e-4bdc-ce945deb22ca">
             <div class="rt-grow-v2-right-inner">
             </div>
            </div>
           </div>
           <div class="rt-grow-v2-right-item" data-w-id="18c39bd5-4a44-10ad-f228-86cbf1a40e4a" style="opacity:0">
            <div class="rt-grow-v2-right-item-inner">
             <div class="rt-text-style-h4 rt-grow-v2-text-3">
              {{ t('about.growChemical') }}
             </div>
             <div class="rt-sub-text rt-grow-v2-text-3">
              03
             </div>
            </div>
            <div class="rt-grow-v2-right-overlay-v2" data-w-id="0d54f6a8-af55-ec8f-9fbe-59d4adf777a7">
             <div class="rt-grow-v2-right-inner">
             </div>
            </div>
           </div>
           <div class="rt-grow-v2-right-item rt-border" data-w-id="4711edd3-ac7a-7b42-c5bf-806469fed6f8" style="opacity:0">
            <div class="rt-grow-v2-right-item-inner">
             <div class="rt-text-style-h4 rt-grow-v2-text-4">
              {{ t('about.growMicro') }}
             </div>
             <div class="rt-sub-text rt-grow-v2-text-4">
              04
             </div>
            </div>
            <div class="rt-grow-v2-right-overlay-v2" data-w-id="fffe9cde-cf32-ea31-975c-37d21dc207b7">
             <div class="rt-grow-v2-right-inner">
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
