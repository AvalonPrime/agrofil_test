<script setup lang="ts">
import { scheduleWebflowBoot } from '~/composables/useWebflow'

const { t } = useHomeCopy()
const media = useHomeMedia()

/**
 * Home hero — kick IX2 as soon as this section mounts.
 * Do not force-reveal early: that skips page-load fade/slide animations.
 */
onMounted(() => {
  scheduleWebflowBoot('home-hero-mounted')
})
</script>

<template>
<section class="rt-banner-main">
      <div aria-label="Home one" class="rt-hero-v1-video-wrapper w-background-video w-background-video-atom" data-autoplay="true" data-loop="true" :data-poster-url="media.heroPoster" :data-video-urls="`${media.heroVideo},${media.heroWebm}`" data-wf-ignore="true">
       <video autoplay data-object-fit="cover" data-wf-ignore="true" id="8502d7d9-b046-abfa-0148-41c12c30caab-video" loop muted playsinline :style="`background-image:url(&quot;${media.heroPoster}&quot;)`">
        <source data-wf-ignore="true" :src="media.heroVideo"/>
        <source data-wf-ignore="true" :src="media.heroWebm"/>
       </video>
       <div class="rt-hero-v1-video-overlay">
       </div>
       <div class="w-layout-blockcontainer rt-home-one-play-main w-container">
        <div class="rt-hero-v1-play-button-big-circle">
         <div class="rt-hero-v1-play-button">
          <div class="rt-video-v1-button-wrap" data-w-id="8502d7d9-b046-abfa-0148-41c12c30caaf">
           <div class="rt-video-v1-button-border rt-radius-full rt-one" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1">
           </div>
           <div class="rt-video-v1-button-border rt-radius-full rt-two" style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1">
           </div>
           <div class="rt-video-v1-button-border rt-radius-full rt-three" style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1">
           </div>
           <noscript>
            <img alt="" data-wf-bgvideo-fallback-img="true" :src="media.heroPoster"/>
           </noscript>
           <div aria-live="polite">
            <button aria-controls="8502d7d9-b046-abfa-0148-41c12c30caab-video" class="w-backgroundvideo-backgroundvideoplaypausebutton rt-hero-v1-play-pause-button w-background-video--control" data-w-bg-video-control="true" type="button">
             <span class="rt-image-center">
              <img alt="Pause video" loading="lazy" src="/assets/69cb620ffbfe45cf1054cdf2_698f03e09f2ba3ef5f5c8778_video-white-pause-icon.svg"/>
             </span>
             <span class="rt-image-center" hidden>
              <img alt="Play video" loading="lazy" src="/assets/69cb620f6d00e2de6aa0a79a_698f03e09f2ba3ef5f5c8779_video-white-play-icon.svg"/>
             </span>
            </button>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="w-layout-blockcontainer rt-container-main w-container">
        <div class="rt-hero-v1-content">
         <div class="rt-hero-v1-left">
          <div>
           <div class="rt-button-to-heading-h1-gap">
            <div class="rt-overflow-hidden">
             <h1 class="rt-gap-off rt-text-color-white" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cac1" style="opacity:0">
              {{ t('home.heroTitle') }}
             </h1>
            </div>
           </div>
           <div class="rt-overflow-hidden">
            <div data-w-id="8502d7d9-b046-abfa-0148-41c12c30cac4" style="opacity:0">
             <a class="rt-button-box w-inline-block" data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd" data-wf--rt-button-green--variant="base" href="/service-one">
              <div class="rt-button-text-wrapper">
               <div class="rt-button-text rt-one">
                {{ t('home.exploreProducts') }}
               </div>
               <div class="rt-button-text rt-two">
                {{ t('home.exploreProducts') }}
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
          <div class="rt-hero-v1-left-buttom" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cac6" style="opacity:0">
           <a aria-label="scroll" class="rt-hero-v1-left-box w-inline-block" href="#rt-banner">
            <div class="rt-image-center rt-hero-v1-left-image">
             <img alt="" class="rt-hero-v1-icon-1" loading="lazy" src="/assets/69cb68326f031192d86b4241_Scroll-down.svg"/>
             <img alt="" class="rt-hero-v1-icon-2" loading="lazy" src="/assets/69cb68326f031192d86b4241_Scroll-down.svg"/>
            </div>
           </a>
           <div class="rt-sub-text rt-text-color-white">
            {{ t('home.scrollDown') }}
           </div>
          </div>
         </div>
         <div class="rt-hero-v1-right">
          <div class="rt-hero-v1-right-item rt-overflow-hidden" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cace" style="opacity:0">
           <div class="rt-hero-v1-right-top">
            <div class="rt-counter-box rt-text-style-h2 rt-h2-height" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cad0">
             <div class="rt-counter">
              <div class="rt-counter-train rt-two" style="-webkit-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                2
               </div>
               <div>
                3
               </div>
               <div>
                4
               </div>
               <div>
                5
               </div>
               <div>
                6
               </div>
               <div>
                7
               </div>
               <div>
                8
               </div>
               <div>
                9
               </div>
               <div>
                0
               </div>
              </div>
              <div class="rt-counter-train rt-two" style="-webkit-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                1
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
              </div>
             </div>
             <div class="rt-counter">
              <div class="rt-counter-train rt-one" style="-webkit-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                9
               </div>
               <div>
                8
               </div>
               <div>
                7
               </div>
               <div>
                6
               </div>
               <div>
                5
               </div>
               <div>
                4
               </div>
               <div>
                3
               </div>
              </div>
              <div class="rt-counter-train rt-one" style="-webkit-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                2
               </div>
               <div>
                5
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
              </div>
             </div>
             <div class="rt-counter">
              <div class="rt-counter-train rt-two" style="-webkit-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                0
               </div>
               <div>
                1
               </div>
               <div>
                2
               </div>
               <div>
                3
               </div>
               <div>
                4
               </div>
               <div>
                5
               </div>
               <div>
                6
               </div>
               <div>
                7
               </div>
               <div>
                8
               </div>
               <div>
                9
               </div>
               <div>
                0
               </div>
              </div>
              <div class="rt-counter-train rt-two" style="-webkit-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                1
               </div>
               <div>
                1
               </div>
               <div>
                1
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
              </div>
             </div>
             <div>
              +
             </div>
            </div>
            <div class="rt-text-style-h5 rt-hero-v1-right-text">
             {{ t('home.happyCustomers') }}
            </div>
           </div>
           <div>
            <div class="rt-infrastructure-left-image">
             <div data-w-id="8502d7d9-b046-abfa-0148-41c12c30cb48" style="opacity:0">
              <img alt="Autor-1" loading="lazy" :src="media.avatars[0]"/>
             </div>
             <div class="rt-hero-v1-margen-image" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cb4a" style="opacity:0">
              <img alt="Autor-2" loading="lazy" :src="media.avatars[1]"/>
             </div>
             <div class="rt-hero-v1-margen-image" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cb4c" style="opacity:0">
              <img alt="Autor-3" loading="lazy" :src="media.avatars[2]"/>
             </div>
            </div>
           </div>
          </div>
          <div class="rt-hero-v1-right-item rt-mobole-display-none" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cb4e" style="opacity:0">
           <div class="rt-hero-v1-right-top">
            <div class="rt-counter-box rt-text-style-h2 rt-h2-height" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cb50">
             <div class="rt-counter">
              <div class="rt-counter-train rt-two" style="-webkit-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                4
               </div>
               <div>
                5
               </div>
               <div>
                6
               </div>
               <div>
                7
               </div>
               <div>
                8
               </div>
               <div>
                9
               </div>
               <div>
                0
               </div>
              </div>
              <div class="rt-counter-train rt-two" style="-webkit-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                1
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
              </div>
             </div>
             <div class="rt-counter">
              <div class="rt-counter-train rt-one" style="-webkit-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                3
               </div>
               <div>
                4
               </div>
               <div>
                5
               </div>
               <div>
                6
               </div>
               <div>
                7
               </div>
               <div>
                8
               </div>
               <div>
                9
               </div>
              </div>
              <div class="rt-counter-train rt-one" style="-webkit-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                0
               </div>
               <div>
                5
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
              </div>
             </div>
             <div class="rt-counter">
              <div class="rt-counter-train rt-two" style="-webkit-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                0
               </div>
               <div>
                1
               </div>
               <div>
                2
               </div>
               <div>
                3
               </div>
               <div>
                4
               </div>
               <div>
                5
               </div>
               <div>
                6
               </div>
               <div>
                7
               </div>
               <div>
                8
               </div>
               <div>
                9
               </div>
               <div>
                0
               </div>
              </div>
              <div class="rt-counter-train rt-two" style="-webkit-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, -100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
               <div>
                1
               </div>
               <div>
                1
               </div>
               <div>
                1
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
               <div>
                9
               </div>
              </div>
             </div>
             <div>
              +
             </div>
            </div>
            <div class="rt-text-style-h5">
             {{ t('home.farmersConnected') }}
            </div>
           </div>
           <div>
            <a class="rt-button-box w-variant-90cb2b47-b68a-2e9d-c122-258bc71d8cad w-inline-block" data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd" data-wf--rt-button-green--variant="white-border" href="/contact">
             <div class="rt-button-text-wrapper">
              <div class="rt-button-text rt-one">
               {{ t('home.joinToday') }}
               </div>
               <div class="rt-button-text rt-two">
               {{ t('home.joinToday') }}
               </div>
             </div>
             <div class="rt-button-icon-wrapper">
              <img alt="" class="rt-button-icon rt-1" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"/>
              <img alt="" class="rt-button-icon rt-2" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"/>
             </div>
             <div class="rt-button-bg w-variant-90cb2b47-b68a-2e9d-c122-258bc71d8cad">
             </div>
            </a>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
