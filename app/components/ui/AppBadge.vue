<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    colorClass?: string
  }>(),
  {
    colorClass: 'rt-sub-text',
  },
)
</script>

<template>
  <div :class="colorClass">
    {{ label }}
  </div>
</template>
