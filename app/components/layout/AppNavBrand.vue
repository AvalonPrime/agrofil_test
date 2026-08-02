<script setup lang="ts">
const { localePath } = useAppI18n()
const logoSrc = useSiteLogo()
</script>

<template>
  <div class="w-layout-hflex rt-header-v1-left">
    <NuxtLink
      class="rt-nav-logo-wrap w-nav-brand"
      :to="localePath('/')"
    >
      <div class="rt-nav-logo rt-one">
        <AppImage
          :src="logoSrc"
          alt="Agrofil"
          height="36"
          width="140"
          loading="eager"
        />
      </div>
    </NuxtLink>
  </div>
</template>
