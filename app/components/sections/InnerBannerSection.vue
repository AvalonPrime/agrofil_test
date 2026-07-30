<script setup lang="ts">
/**
 * Prop-driven inner page banner (blog / contact / services).
 * Keeps Webflow classes and IX2 hooks for scroll animations.
 */
withDefaults(
  defineProps<{
    eyebrow: string
    title: string
    anchorHref: string
    imageSrc: string
    imageSrcset?: string
    imageAlt?: string
    interactionRootId?: string
    interactionEyebrowId?: string
    interactionTitleId?: string
    interactionButtonId?: string
  }>(),
  {
    imageAlt: '',
    interactionRootId: '39a0ceb5-8bf7-c8d8-6f7f-3e2ab184bac5',
    interactionEyebrowId: '39a0ceb5-8bf7-c8d8-6f7f-3e2ab184baca',
    interactionTitleId: '39a0ceb5-8bf7-c8d8-6f7f-3e2ab184bacd',
    interactionButtonId: '39a0ceb5-8bf7-c8d8-6f7f-3e2ab184bacf',
  },
)
</script>

<template>
  <section
    class="rt-inner-banner"
    :data-w-id="interactionRootId"
  >
    <PageContainer>
      <div class="rt-center-content rt-z">
        <div class="rt-inner-banner-content rt-desktop-text-center">
          <div class="rt-sub-text-gap rt-overflow-hidden">
            <div
              class="rt-sub-text rt-text-color-white"
              :data-w-id="interactionEyebrowId"
            >
              {{ eyebrow }}
            </div>
          </div>
          <div class="rt-inner-banner-heading-buttom rt-overflow-hidden">
            <h1
              class="rt-gap-off rt-text-color-white"
              :data-w-id="interactionTitleId"
            >
              {{ title }}
            </h1>
          </div>
          <a
            aria-label="section-link"
            class="rt-inner-banner-buttom w-inline-block"
            :data-w-id="interactionButtonId"
            :href="anchorHref"
          >
            <div class="rt-image-center rt-overflow-hidden rt-hero-v2-botton-icon">
              <AppImage
                src="/assets/69d34ab011d74b16920611d2_dowm-arrow.svg"
                alt=""
                class="rt-hero-v2-down-1"
                loading="lazy"
              />
              <AppImage
                src="/assets/69d34ab011d74b16920611d2_dowm-arrow.svg"
                alt=""
                class="rt-hero-v2-down-2"
                loading="lazy"
              />
            </div>
          </a>
        </div>
      </div>
    </PageContainer>
    <div class="rt-inner-banner-image-wrapper rt-overflow-hidden">
      <AppImage
        :src="imageSrc"
        :srcset="imageSrcset"
        :alt="imageAlt"
        class="rt-inner-banner-image"
        sizes="(max-width: 3840px) 100vw, 3840px"
      />
      <div class="rt-inner-banner-overlay" />
    </div>
  </section>
</template>
