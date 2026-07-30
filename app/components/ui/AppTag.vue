<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>

<template>
  <span class="rt-sub-text">
    {{ label }}
  </span>
</template>
