<script setup lang="ts">
const { t, localePath } = useCmsCopy()

defineProps<{
  eyebrow?: string
  title: string
  ctaLabel?: string
  ctaTo?: string
}>()
</script>

<template>
  <section class="rt-inner-banner">
    <div class="w-layout-blockcontainer rt-container-main w-container">
      <div class="rt-center-content rt-z">
        <div class="rt-her-v5-banner-content rt-desktop-text-center">
          <div class="rt-sub-text-gap rt-overflow-hidden">
            <div class="rt-sub-text rt-text-color-white agro-enter agro-enter--d1">
              {{ eyebrow || t('products.hubEyebrow') }}
            </div>
          </div>
          <div class="rt-h1-button-gap rt-overflow-hidden">
            <h1 class="rt-gap-off rt-text-color-white agro-enter agro-enter--d2">
              {{ title }}
            </h1>
          </div>
          <div class="rt-overflow-hidden">
            <div class="agro-enter agro-enter--d3">
              <NuxtLink
                class="rt-button-box w-inline-block"
                data-wf--rt-button-green--variant="base"
                :to="ctaTo || localePath('/contact')"
              >
                <div class="rt-button-text-wrapper">
                  <div class="rt-button-text rt-one">
                    {{ ctaLabel || t('nav.getStarted') }}
                  </div>
                  <div class="rt-button-text rt-two">
                    {{ ctaLabel || t('nav.getStarted') }}
                  </div>
                </div>
                <div class="rt-button-icon-wrapper">
                  <img
                    alt=""
                    class="rt-button-icon rt-1"
                    loading="lazy"
                    src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
                  >
                  <img
                    alt=""
                    class="rt-button-icon rt-2"
                    loading="lazy"
                    src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
                  >
                </div>
                <div class="rt-button-bg" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="rt-inner-banner-image-wrapper rt-overflow-hidden">
      <img
        alt=""
        class="rt-inner-banner-image agro-enter-zoom"
        sizes="(max-width: 3840px) 100vw, 3840px"
        src="/assets/69df1cf17931d6a9282cd718_Service-one-banner-image.webp"
        srcset="/assets/69df1cf17931d6a9282cd718_Service-one-banner-image-p-500.webp 500w, /assets/69df1cf17931d6a9282cd718_Service-one-banner-image-p-800.webp 800w, /assets/69df1cf17931d6a9282cd718_Service-one-banner-image-p-1080.webp 1080w, /assets/69df1cf17931d6a9282cd718_Service-one-banner-image.webp 3840w"
      >
      <div class="rt-inner-banner-overlay" />
    </div>
  </section>
</template>
