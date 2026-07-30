<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    size?: 'main' | 'large' | 'small'
    tag?: string
  }>(),
  {
    size: 'main',
    tag: 'div',
  },
)

const sizeClass = computed(() => {
  switch (props.size) {
    case 'large':
      return 'rt-container-large'
    case 'small':
      return 'rt-container-small'
    default:
      return 'rt-container-main'
  }
})
</script>

<template>
  <component
    :is="tag"
    class="w-layout-blockcontainer w-container"
    :class="sizeClass"
  >
    <slot />
  </component>
</template>
