<script setup lang="ts">
const { t, localePath } = useCmsCopy()
</script>

<template>
  <div class="w-layout-hflex rt-nav-button-wrap">
    <div class="w-layout-hflex rt-nav-link-wrap-v6">
      <div class="rt-nav-link-wrap-white-btn">
        <a
          class="rt-button-box w-variant-210604f9-fc7f-0005-2ab4-541c82c79d37 w-inline-block"
          data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd"
          data-wf--rt-button-green--variant="white"
          :href="localePath('/contact')"
        >
          <div class="rt-button-text-wrapper">
            <div class="rt-button-text rt-one">
              {{ t('nav.getStarted') }}
            </div>
            <div class="rt-button-text rt-two">
              {{ t('nav.getStarted') }}
            </div>
          </div>
          <div class="rt-button-icon-wrapper">
            <AppImage
              src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
              alt=""
              class="rt-button-icon rt-1"
              loading="lazy"
            />
            <AppImage
              src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
              alt=""
              class="rt-button-icon rt-2"
              loading="lazy"
            />
          </div>
          <div class="rt-button-bg w-variant-210604f9-fc7f-0005-2ab4-541c82c79d37" />
        </a>
      </div>
    </div>
  </div>
  <div class="rt-nav-button w-nav-button">
    <div class="rt-responsive-nav-button-wrap">
      <div class="rt-nav-button-line rt-top-line" />
      <div class="rt-nav-button-line rt-middile-line" />
    </div>
  </div>
</template>
