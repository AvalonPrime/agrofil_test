<script setup lang="ts">
const { t } = useHomeCopy()
const media = useHomeMedia()

/**
 * Extracted from home-one — Focus block.
 * Markup preserves Webflow classes / data-w-id for IX2.
 */
</script>

<template>
<section class="rt-focus">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-center-content">
        <div class="rt-focus-heaigt" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd5d">
         <div class="rt-focus-wrapper">
          <div class="rt-focus-text-content" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd5f">
           <div class="rt-focus-text rt-1">
            {{ t('home.focusWord1') }}
           </div>
           <div class="rt-focus-text rt-2">
            {{ t('home.focusWord2') }}
           </div>
           <div class="rt-focus-text rt-3">
            {{ t('home.focusWord3') }}
           </div>
           <div class="rt-focus-text rt-4">
            {{ t('home.focusWord4') }}
           </div>
          </div>
          <div class="rt-focus-over">
           <div class="rt-focus-item rt-1" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd69">
            <div class="rt-text-style-h3">
             {{ t('home.focusEco') }}
            </div>
            <div>
             <img alt="Focus-image" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.focusImage('eco')"/>
            </div>
            <div class="rt-focus-item-para">
             <p class="rt-gap-off">
              {{ t('home.focusEcoDesc') }}
             </p>
            </div>
           </div>
           <div class="rt-focus-item rt-2" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd71">
            <div class="rt-text-style-h3">
             {{ t('home.focusBalanced') }}
            </div>
            <div>
             <img alt="Home-card-image2" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.focusImage('balanced')"/>
            </div>
            <div class="rt-focus-item-para">
             <p class="rt-gap-off">
              {{ t('home.focusBalancedDesc') }}
             </p>
            </div>
           </div>
           <div class="rt-focus-item rt-3" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cd79">
            <div class="rt-text-style-h3">
             {{ t('home.focusQuality') }}
            </div>
            <div>
             <img alt="Home-card-image3" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.focusImage('quality')"/>
            </div>
            <div class="rt-focus-item-para">
             <p class="rt-gap-off">
              {{ t('home.focusQualityDesc') }}
             </p>
            </div>
           </div>
          </div>
         </div>
        </div>
        <div class="rt-mobile-slider">
         <div class="rt-process-mobile-slider w-slider" data-animation="slide" data-autoplay="false" data-autoplay-limit="0" data-delay="4000" data-disable-swipe="false" data-duration="500" data-easing="ease" data-hide-arrows="false" data-infinite="true" data-nav-spacing="3">
          <div class="rt-process-mobile-mask w-slider-mask">
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-focus-item rt-1">
             <div class="rt-text-style-h3">
              {{ t('home.focusEco') }}
             </div>
             <div>
              <img alt="Focus-image" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.focusImage('eco')"/>
             </div>
             <div class="rt-focus-item-para">
              <p class="rt-gap-off">
               {{ t('home.focusEcoDesc') }}
              </p>
             </div>
            </div>
           </div>
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-focus-item rt-2">
             <div class="rt-text-style-h3">
              {{ t('home.focusBalanced') }}
             </div>
             <div>
              <img alt="Home-card-image2" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.focusImage('balanced')"/>
             </div>
             <div class="rt-focus-item-para">
              <p class="rt-gap-off">
               {{ t('home.focusBalancedDesc') }}
              </p>
             </div>
            </div>
           </div>
           <div class="rt-process-mobile-slider-width w-slide">
            <div class="rt-focus-item rt-3">
             <div class="rt-text-style-h3">
              {{ t('home.focusQuality') }}
             </div>
             <div>
              <img alt="Home-card-image3" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.focusImage('quality')"/>
             </div>
             <div class="rt-focus-item-para">
              <p class="rt-gap-off">
               {{ t('home.focusQualityDesc') }}
              </p>
             </div>
            </div>
           </div>
          </div>
          <div class="rt-process-mobile-slider-dot w-slider-nav w-shadow w-round">
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
