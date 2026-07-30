<script setup lang="ts">
defineProps<{
  src: string
  alt?: string
  class?: string
  width?: string | number
  height?: string | number
}>()
</script>

<template>
  <AppImage
    :alt="alt || ''"
    :class="class"
    :height="height"
    :src="src"
    :width="width"
    loading="lazy"
  />
</template>
