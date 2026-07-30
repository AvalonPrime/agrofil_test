<script setup lang="ts">
const { t } = useHomeCopy()
const media = useHomeMedia()

/**
 * Extracted from home-one — Farming block.
 * Markup preserves Webflow classes / data-w-id for IX2.
 */
</script>

<template>
<section class="rt-farming">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="w-layout-hflex rt-farming-top">
        <div class="rt-farming-top-heading">
         <div class="rt-sub-text-gap rt-overflow-hidden">
          <div class="rt-sub-text" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad1b">
           {{ t('home.methodsEyebrow') }}
          </div>
         </div>
         <div class="rt-overflow-hidden">
          <h2 class="rt-gap-off" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad1e">
           {{ t('home.methodsTitle') }}
          </h2>
         </div>
        </div>
        <div class="rt-farming-top-right rt-overflow-hidden">
         <div data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad21">
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
       <div class="rt-farming-wrapper">
        <div class="rt-farming-left rt-overflow-hidden" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad25">
         <a class="rt-farming-left-item w-inline-block" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad26" href="#rt-farming-1">
          <div class="rt-farming-left-item-inner rt-1">
           <div class="rt-text-color-green">
            {{ t('home.organicMethod') }}
           </div>
           <div>
            <img alt="" loading="lazy" src="/assets/69cbc51dafd140c93c38f2b2_Right-icon.svg"/>
           </div>
          </div>
          <div class="rt-farming-over rt-1">
          </div>
         </a>
         <a class="rt-farming-left-item w-inline-block" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad2d" href="#rt-farming-2">
          <div class="rt-farming-left-item-inner rt-2">
           <div class="rt-text-color-green">
            {{ t('home.chemicalMethod') }}
           </div>
           <div>
            <img alt="" loading="lazy" src="/assets/69cbc51dafd140c93c38f2b2_Right-icon.svg"/>
           </div>
          </div>
          <div class="rt-farming-over rt-2">
          </div>
         </a>
         <a class="rt-farming-left-item w-inline-block" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad34" href="#rt-farming-3">
          <div class="rt-farming-left-item-inner rt-3">
           <div class="rt-text-color-green">
            {{ t('home.dripMethod') }}
           </div>
           <div>
            <img alt="" loading="lazy" src="/assets/69cbc51dafd140c93c38f2b2_Right-icon.svg"/>
           </div>
          </div>
          <div class="rt-farming-over rt-3">
          </div>
         </a>
         <a class="rt-farming-left-item w-inline-block" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad3b" href="#rt-farming-4">
          <div class="rt-farming-left-item-inner rt-4">
           <div class="rt-text-color-green">
            {{ t('home.microMethod') }}
           </div>
           <div>
            <img alt="" loading="lazy" src="/assets/69cbc51dafd140c93c38f2b2_Right-icon.svg"/>
           </div>
          </div>
          <div class="rt-farming-over rt-4">
          </div>
         </a>
         <a class="rt-farming-left-item rt-border-of w-inline-block" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad42" href="#rt-farming-5">
          <div class="rt-farming-left-item-inner rt-5">
           <div class="rt-text-color-green">
            {{ t('home.orgamineralMethod') }}
           </div>
           <div>
            <img alt="" loading="lazy" src="/assets/69cbc51dafd140c93c38f2b2_Right-icon.svg"/>
           </div>
          </div>
          <div class="rt-farming-over rt-5">
          </div>
         </a>
        </div>
        <div class="rt-farming-right">
         <div class="rt-farming-right-item rt-1" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad4a" id="rt-farming-1">
          <div class="rt-farming-image">
           <img alt="Farming-image-1" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.farmingImage('organic')"/>
          </div>
          <div class="rt-farming-text-wrap">
           <h3 class="rt-farming-heading-1 rt-farming-heading-tex">
            {{ t('home.organicMethod') }}
           </h3>
           <p class="rt-farming-para-1 rt-farming-heading-tex">
            {{ t('home.organicMethodDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-farming-right-item rt-2" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad52" id="rt-farming-2">
          <div class="rt-farming-image">
           <img alt="Farming-image-2" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.farmingImage('chemical')"/>
          </div>
          <div class="rt-farming-text-wrap">
           <h3 class="rt-farming-heading-2 rt-farming-heading-tex">
            {{ t('home.chemicalMethod') }}
           </h3>
           <p class="rt-farming-para-2 rt-farming-heading-tex">
            {{ t('home.chemicalMethodDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-farming-right-item rt-3" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad5a" id="rt-farming-3">
          <div class="rt-farming-image">
           <img alt="Farming-image-3" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.farmingImage('drip')"/>
          </div>
          <div class="rt-farming-text-wrap">
           <h3 class="rt-farming-heading-3 rt-farming-heading-tex">
            {{ t('home.dripMethod') }}
           </h3>
           <p class="rt-farming-para-3 rt-farming-heading-tex">
            {{ t('home.dripMethodDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-farming-right-item rt-4" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad62" id="rt-farming-4">
          <div class="rt-farming-image">
           <img alt="Farming-image-2" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.farmingImage('micro')"/>
          </div>
          <div class="rt-farming-text-wrap">
           <h3 class="rt-farming-heading-4 rt-farming-heading-tex">
            {{ t('home.microMethod') }}
           </h3>
           <p class="rt-farming-para-4 rt-farming-heading-tex">
            {{ t('home.microMethodDesc') }}
           </p>
          </div>
         </div>
         <div class="rt-farming-right-item rt-5" data-w-id="4f73e844-be2f-8ff3-1200-6d081982ad6a" id="rt-farming-5">
          <div class="rt-farming-image">
           <img alt="Farming-image-1" class="rt-border-main" loading="lazy" sizes="100vw" :src="media.farmingImage('orgamineral')"/>
          </div>
          <div class="rt-farming-text-wrap">
           <h3 class="rt-farming-heading-5 rt-farming-heading-tex">
            {{ t('home.orgamineralMethod') }}
           </h3>
           <p class="rt-farming-para-5 rt-farming-heading-tex">
            {{ t('home.orgamineralMethodDesc') }}
           </p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
