<script setup lang="ts">
const { t } = useHomeCopy()
const media = useHomeMedia()
</script>

<template>
<section class="rt-offerings" id="rt-banner">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-center-content">
        <div class="rt-offerings-top rt-desktop-text-center">
         <div class="rt-sub-text-gap rt-overflow-hidden">
          <div class="rt-sub-text" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cbc6" style="opacity:0">
           {{ t('home.offeringsEyebrow') }}
          </div>
         </div>
         <div class="rt-card-text-solide rt-overflow-hidden">
          <h2 class="rt-gap-off" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cbc9" style="opacity:0">
           {{ t('home.offeringsTitle') }}
          </h2>
         </div>
        </div>
        <div class="rt-offerings-wrapper rt-overflow-hidden">
         <div class="rt-offerings-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cbcc" id="w-node-_8502d7d9-b046-abfa-0148-41c12c30cbcc-3e854614" style="opacity:0">
          <div class="rt-offerings-item-icon">
           <img alt="" loading="lazy" :src="media.offeringIcon('drip')">
          </div>
          <div class="rt-offerings-item-content">
           <div class="rt-text-style-h5">
            {{ t('home.drip') }}
           </div>
           <div>
            {{ t('home.dripDesc') }}
           </div>
          </div>
         </div>
         <div class="rt-offerings-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cbd4" id="w-node-_8502d7d9-b046-abfa-0148-41c12c30cbd4-3e854614" style="opacity:0">
          <div class="rt-offerings-item-icon">
           <img alt="" loading="lazy" :src="media.offeringIcon('chemical')">
          </div>
          <div class="rt-offerings-item-content">
           <div class="rt-text-style-h5">
            {{ t('home.chemical') }}
           </div>
           <div>
            {{ t('home.chemicalDesc') }}
           </div>
          </div>
         </div>
         <div class="rt-offerings-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cbdc" id="w-node-_8502d7d9-b046-abfa-0148-41c12c30cbdc-3e854614" style="opacity:0">
          <div class="rt-offerings-item-icon">
           <img alt="" loading="lazy" :src="media.offeringIcon('organic')">
          </div>
          <div class="rt-offerings-item-content">
           <div class="rt-text-style-h5">
            {{ t('home.organic') }}
           </div>
           <div>
            {{ t('home.organicDesc') }}
           </div>
          </div>
         </div>
         <div class="rt-offerings-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cbe4" id="w-node-_8502d7d9-b046-abfa-0148-41c12c30cbe4-3e854614" style="opacity:0">
          <div class="rt-offerings-item-icon">
           <img alt="" loading="lazy" :src="media.offeringIcon('orgamineral')">
          </div>
          <div class="rt-offerings-item-content">
           <div class="rt-text-style-h5">
            {{ t('home.orgamineral') }}
           </div>
           <div>
            {{ t('home.orgamineralDesc') }}
           </div>
          </div>
         </div>
         <div class="rt-offerings-item" data-w-id="8502d7d9-b046-abfa-0148-41c12c30cbec" id="w-node-_8502d7d9-b046-abfa-0148-41c12c30cbec-3e854614" style="opacity:0">
          <div class="rt-offerings-item-icon">
           <img alt="" loading="lazy" :src="media.offeringIcon('micro')">
          </div>
          <div class="rt-offerings-item-content">
           <div class="rt-text-style-h5">
            {{ t('home.micro') }}
           </div>
           <div>
            {{ t('home.microDesc') }}
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
