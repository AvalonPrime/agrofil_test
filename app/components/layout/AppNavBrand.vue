<script setup lang="ts">
import { LOGO_MAIN_SRC } from '~/constants/assets'

const { localePath } = useAppI18n()
</script>

<template>
  <div class="w-layout-hflex rt-header-v1-left">
    <NuxtLink
      class="rt-nav-logo-wrap w-nav-brand"
      :to="localePath('/')"
    >
      <div class="rt-nav-logo rt-one">
        <AppImage
          :src="LOGO_MAIN_SRC"
          alt=""
          height="28"
          width="142"
          loading="lazy"
        />
      </div>
    </NuxtLink>
  </div>
</template>
