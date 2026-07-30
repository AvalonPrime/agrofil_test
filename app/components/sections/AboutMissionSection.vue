<script setup lang="ts">
const { t } = useCmsCopy()
const media = useAboutMedia()

/** Extracted from about — rt-mission-v1 */
</script>

<template>
<section class="rt-mission-v1">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="w-layout-hflex rt-mission-v1-wrapper">
        <div class="rt-mission-v1-left">
         <div class="rt-mission-v1-heading rt-desktop-text-center">
          <div class="rt-sub-text-gap rt-overflow-hidden">
           <div class="rt-sub-text" data-w-id="21809cb7-a3ff-709c-3f2d-15cdf901b60c" style="opacity:0">
            {{ t('about.missionEyebrow') }}
           </div>
          </div>
          <div class="rt-heading-to-para rt-overflow-hidden">
           <h2 class="rt-gap-off" data-w-id="21809cb7-a3ff-709c-3f2d-15cdf901b60f" style="opacity:0">
            {{ t('about.missionTitle') }}
           </h2>
          </div>
          <div class="rt-button-to-para rt-overflow-hidden">
           <p class="rt-gap-off" data-w-id="21809cb7-a3ff-709c-3f2d-15cdf901b612" style="opacity:0">
            {{ t('about.missionText') }}
           </p>
          </div>
          <div class="rt-overflow-hidden">
           <div data-w-id="21809cb7-a3ff-709c-3f2d-15cdf901b615" style="opacity:0">
            <a class="rt-button-box w-inline-block" data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd" data-wf--rt-button-green--variant="base" href="/service-one">
             <div class="rt-button-text-wrapper">
              <div class="rt-button-text rt-one">
               {{ t('about.missionCta') }}
              </div>
              <div class="rt-button-text rt-two">
               {{ t('about.missionCta') }}
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
         <div class="w-layout-hflex rt-mission-v1-left-content">
          <div class="w-layout-vflex rt-mission-v1-left-item rt-border-main" data-w-id="4367bf1d-8337-85ec-747a-6b09f7a45028" style="opacity:0">
           <div class="rt-text-style-h5">
            01
           </div>
           <div class="w-layout-vflex rt-mission-v1-left-item-inner">
            <div class="rt-text-style-h5">
             {{ t('about.missionQuality') }}
            </div>
            <div>
             {{ t('about.missionQualityDesc') }}
            </div>
           </div>
          </div>
          <div class="w-layout-vflex rt-mission-v1-left-item rt-border-main" data-w-id="65db057d-f7b0-e6ee-6d54-0e1b72ee7402" style="opacity:0">
           <div class="rt-text-style-h5">
            02
           </div>
           <div class="w-layout-vflex rt-mission-v1-left-item-inner">
            <div class="rt-text-style-h5">
             {{ t('about.missionIntegrity') }}
            </div>
            <div>
             {{ t('about.missionIntegrityDesc') }}
            </div>
           </div>
          </div>
         </div>
        </div>
        <div class="rt-mission-v1-right rt-border-main rt-overflow-hidden" data-w-id="1e4dfe4a-66e8-e712-1a4d-e8004c2c2ef1" style="opacity:0">
         <img alt="About-mission-1" loading="lazy" sizes="100vw" :src="media.missionImage"/>
        </div>
       </div>
      </div>
     </section>
</template>
