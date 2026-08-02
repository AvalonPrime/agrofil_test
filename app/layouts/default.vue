<script setup lang="ts">
const { locale } = useAppI18n()
const { globalCopy, logoUrl } = await useAsyncGlobalContent(locale)
provideCmsCopy(globalCopy)
provideSiteLogo(logoUrl)
</script>

<template>
  <ClientOnly>
    <div class="harvestam-site">
      <AppHeader />
      <main class="harvestam-main">
        <slot />
      </main>
      <AppFooter />
    </div>
    <template #fallback>
      <div class="harvestam-site harvestam-site--loading">
        <div class="harvestam-markup harvestam-markup--loading" />
      </div>
    </template>
  </ClientOnly>
</template>
