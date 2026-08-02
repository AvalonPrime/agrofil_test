<script setup lang="ts">
const { t } = useCmsCopy()
const media = useAboutMedia()

/** Extracted from about — rt-farmers-v1 */
</script>

<template>
  <section
    class="rt-farmers-v1"
    data-w-id="a444a672-ec39-3d2c-7a1e-79f92fd00351"
  >
    <div class="w-layout-blockcontainer rt-container-main w-container">
      <div class="rt-center-content">
        <div class="rt-products-v1-top rt-desktop-text-center">
          <div class="rt-sub-text-gap rt-overflow-hidden">
            <div
              class="rt-sub-text"
              data-w-id="a444a672-ec39-3d2c-7a1e-79f92fd00356"
            >
              {{ t('about.teamEyebrow') }}
            </div>
          </div>
          <div class="rt-card-text-solide rt-overflow-hidden">
            <h2
              class="rt-gap-off"
              data-w-id="a444a672-ec39-3d2c-7a1e-79f92fd00359"
            >
              {{ t('about.teamTitle') }}
            </h2>
          </div>
        </div>
        <div class="rt-farmers-v1-wrapper">
          <div
            class="rt-farmers-v1-item rt-overflow-hidden rt-border-main"
            data-w-id="a444a672-ec39-3d2c-7a1e-79f92fd0035c"
          >
            <img
              alt="Farmers-image-meet-1"
              class="rt-scale-image"
              loading="lazy"
              sizes="100vw"
              :src="media.teamPhoto('mahir')"
            >
            <div class="rt-farmers-v1-item-overlay">
              <div class="rt-farmers-v1-item-overlay-inner">
                <div class="rt-text-style-h4 rt-text-color-white">
                  {{ t('about.team1Name') }}
                </div>
                <div class="rt-text-color-white">
                  {{ t('about.team1Role') }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="rt-farmers-v1-item rt-2 rt-overflow-hidden rt-border-main"
            data-w-id="a444a672-ec39-3d2c-7a1e-79f92fd00364"
          >
            <img
              alt="Farmers-image-meet-3"
              class="rt-scale-image"
              loading="lazy"
              sizes="100vw"
              :src="media.teamPhoto('betul')"
            >
            <div class="rt-farmers-v1-item-overlay">
              <div class="rt-farmers-v1-item-overlay-inner">
                <div class="rt-text-style-h4 rt-text-color-white">
                  {{ t('about.team2Name') }}
                </div>
                <div class="rt-text-color-white">
                  {{ t('about.team2Role') }}
                </div>
              </div>
            </div>
          </div>
          <div
            class="rt-farmers-v1-item rt-3 rt-overflow-hidden rt-border-main"
            data-w-id="a444a672-ec39-3d2c-7a1e-79f92fd0036c"
          >
            <img
              alt="Farmers-image-meet-2"
              class="rt-scale-image"
              loading="lazy"
              sizes="100vw"
              :src="media.teamPhoto('wasim')"
            >
            <div class="rt-farmers-v1-item-overlay">
              <div class="rt-farmers-v1-item-overlay-inner">
                <div class="rt-text-style-h4 rt-text-color-white">
                  {{ t('about.team3Name') }}
                </div>
                <div class="rt-text-color-white">
                  {{ t('about.team3Role') }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
