<script setup lang="ts">
const { t } = useCmsCopy()
const media = useAboutMedia()

/** Extracted from about — rt-trusted */
</script>

<template>
<section class="rt-trusted">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-trusted-top rt-change" data-w-id="48fde3ff-0453-4462-48e0-b6a76b861a5d">
        <div class="rt-counter-box rt-big-marquree-text rt-big-height" data-w-id="48fde3ff-0453-4462-48e0-b6a76b861a5e">
         <div class="rt-counter">
          <div class="rt-counter-train rt-two">
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
          </div>
          <div class="rt-counter-train rt-two">
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
          <div class="rt-counter-train rt-one">
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
          <div class="rt-counter-train rt-one">
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
         <div class="rt-counter-box-plus">
          <div class="rt-image-center">
           <img alt="" loading="lazy" src="/assets/69d3b7b979723339c3830244_%2B.svg"/>
          </div>
         </div>
        </div>
        <div class="rt-trusted-top-text">
         <div class="rt-sub-text">
          {{ t('about.trusted') }}
         </div>
        </div>
       </div>
       <div class="rt-trusted-container">
        <div class="w-layout-grid rt-partners-grid-v2" data-w-id="48fde3ff-0453-4462-48e0-b6a76b861a9c">
         <div
           v-for="(logo, index) in media.trustedLogos"
           :key="`${index}-${logo}`"
           class="rt-partners-card-v2"
           data-w-id="48fde3ff-0453-4462-48e0-b6a76b861a9d"
         >
          <div class="rt-partners-icon">
           <img alt="" class="rt-partners-logo rt-1" height="30" loading="lazy" :src="logo" width="105">
           <img alt="" class="rt-partners-logo rt-2" height="30" loading="lazy" :src="logo" width="105">
          </div>
          <div class="rt-partners-over-v2" />
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
