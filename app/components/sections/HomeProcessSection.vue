<script setup lang="ts">
const { t } = useHomeCopy()
const media = useHomeMedia()

/**
 * Extracted from home-one — Process block.
 * Markup preserves Webflow classes / data-w-id for IX2.
 */
</script>

<template>
<section class="rt-process rt-overflow-hidden">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-process-wrapper" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd83">
        <div class="rt-process-content rt-desktop-text-center">
         <div class="rt-heading-to-para rt-overflow-hidden">
          <h2 class="rt-gap-off" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd86" style="opacity:0">
           {{ t('home.processTitle') }}
          </h2>
         </div>
         <div class="rt-overflow-hidden rt-button-to-para">
          <div class="rt-gap-off" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd89" style="opacity:0">
           <p class="rt-gap-off">
            {{ t('home.processSubtitle') }}
           </p>
          </div>
         </div>
         <div class="rt-overflow-hidden">
          <div data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd8d" style="opacity:0">
           <a class="rt-button-box w-inline-block" data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd" data-wf--rt-button-green--variant="base" href="/service-one">
            <div class="rt-button-text-wrapper">
             <div class="rt-button-text rt-one">
              {{ t('home.viewProducts') }}
             </div>
             <div class="rt-button-text rt-two">
              {{ t('home.viewProducts') }}
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
        <div class="rt-process-over">
         <div class="rt-process-over-item rt-one" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd91">
          <div class="rt-process-icon">
           <img alt="" loading="lazy" :src="media.processIcon('soil')"/>
          </div>
          <div class="w-layout-vflex rt-process-text-item">
           <div class="rt-text-style-h4">
            {{ t('home.processSoil') }}
           </div>
           <p class="rt-gap-off">
            {{ t('home.processSoilDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-process-over-item rt-two" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd99">
          <div class="rt-process-icon">
           <img alt="" loading="lazy" :src="media.processIcon('nutrient')"/>
          </div>
          <div class="w-layout-vflex rt-process-text-item">
           <div class="rt-text-style-h4">
            {{ t('home.processNutrient') }}
           </div>
           <p class="rt-gap-off">
            {{ t('home.processNutrientDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-process-over-item rt-three" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cda1">
          <div class="rt-process-icon">
           <img alt="" loading="lazy" :src="media.processIcon('yields')"/>
          </div>
          <div class="w-layout-vflex rt-process-text-item">
           <div class="rt-text-style-h4">
            {{ t('home.processYields') }}
           </div>
           <p class="rt-gap-off">
            {{ t('home.processYieldsDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-process-over-item rt-four" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cda9">
          <div class="rt-process-icon">
           <img alt="" loading="lazy" :src="media.processIcon('balanced')"/>
          </div>
          <div class="w-layout-vflex rt-process-text-item">
           <div class="rt-text-style-h4">
            {{ t('home.processBalanced') }}
           </div>
           <p class="rt-gap-off">
            {{ t('home.processBalancedDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-process-over-item rt-five" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cdb1">
          <div class="rt-process-icon">
           <img alt="" loading="lazy" :src="media.processIcon('drip')"/>
          </div>
          <div class="w-layout-vflex rt-process-text-item">
           <div class="rt-text-style-h4">
            {{ t('home.processDrip') }}
           </div>
           <p class="rt-gap-off">
            {{ t('home.processDripDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-process-over-item rt-six" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cdb9">
          <div class="rt-process-icon">
           <img alt="" loading="lazy" :src="media.processIcon('micro')"/>
          </div>
          <div class="w-layout-vflex rt-process-text-item">
           <div class="rt-text-style-h4">
            {{ t('home.processMicro') }}
           </div>
           <p class="rt-gap-off">
            {{ t('home.processMicroDesc') }}
           </p>
          </div>
         </div>
        </div>
        <div class="rt-mobile-slider">
         <div class="rt-process-mobile-slider w-slider" data-animation="slide" data-autoplay="false" data-autoplay-limit="0" data-delay="4000" data-disable-swipe="false" data-duration="500" data-easing="ease" data-hide-arrows="false" data-infinite="true" data-nav-spacing="3" data-w-id="e86f69d8-e06a-d96f-29d7-da69bc4bc44d" style="opacity:0">
          <div class="rt-process-mobile-mask w-slider-mask">
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-process-over-item rt-one" data-w-id="f39b0380-3645-c636-a1ad-47154600dd7c">
             <div class="rt-process-icon">
              <img alt="" loading="lazy" :src="media.processIcon('soil')"/>
             </div>
             <div class="w-layout-vflex rt-process-text-item">
              <div class="rt-text-style-h4">
               {{ t('home.processSoil') }}
              </div>
              <p class="rt-gap-off">
               {{ t('home.processSoilDesc') }}
              </p>
             </div>
            </div>
           </div>
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-process-over-item rt-two" data-w-id="e96d5090-da1e-7200-87f7-e50666bf79e1">
             <div class="rt-process-icon">
              <img alt="" loading="lazy" :src="media.processIcon('nutrient')"/>
             </div>
             <div class="w-layout-vflex rt-process-text-item">
              <div class="rt-text-style-h4">
               {{ t('home.processNutrient') }}
              </div>
              <p class="rt-gap-off">
               {{ t('home.processNutrientDesc') }}
              </p>
             </div>
            </div>
           </div>
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-process-over-item rt-three" data-w-id="1a8f3419-61fa-678f-e0de-bf6b7fea16cf">
             <div class="rt-process-icon">
              <img alt="" loading="lazy" :src="media.processIcon('yields')"/>
             </div>
             <div class="w-layout-vflex rt-process-text-item">
              <div class="rt-text-style-h4">
               {{ t('home.processYields') }}
              </div>
              <p class="rt-gap-off">
               {{ t('home.processYieldsDesc') }}
              </p>
             </div>
            </div>
           </div>
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-process-over-item rt-four" data-w-id="81645992-91fa-f758-7731-3e47735a4b06">
             <div class="rt-process-icon">
              <img alt="" loading="lazy" :src="media.processIcon('balanced')"/>
             </div>
             <div class="w-layout-vflex rt-process-text-item">
              <div class="rt-text-style-h4">
               {{ t('home.processBalanced') }}
              </div>
              <p class="rt-gap-off">
               {{ t('home.processBalancedDesc') }}
              </p>
             </div>
            </div>
           </div>
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-process-over-item rt-five" data-w-id="36fcb110-a1d2-96d7-ac8c-2dfd91a9d71c">
             <div class="rt-process-icon">
              <img alt="" loading="lazy" :src="media.processIcon('drip')"/>
             </div>
             <div class="w-layout-vflex rt-process-text-item">
              <div class="rt-text-style-h4">
               {{ t('home.processDrip') }}
              </div>
              <p class="rt-gap-off">
               {{ t('home.processDripDesc') }}
              </p>
             </div>
            </div>
           </div>
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-process-over-item rt-six" data-w-id="373c8051-bc95-6138-ae84-23a7d0c96dd1">
             <div class="rt-process-icon">
              <img alt="" loading="lazy" :src="media.processIcon('micro')"/>
             </div>
             <div class="w-layout-vflex rt-process-text-item">
              <div class="rt-text-style-h4">
               {{ t('home.processMicro') }}
              </div>
              <p class="rt-gap-off">
               {{ t('home.processMicroDesc') }}
              </p>
             </div>
            </div>
           </div>
          </div>
          <div class="rt-process-mobile-slider-dot w-slider-nav w-slider-nav-invert w-shadow w-round">
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
