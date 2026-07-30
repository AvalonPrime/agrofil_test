<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string
    title: string
    titleTag?: 'h1' | 'h2' | 'h3'
    align?: 'left' | 'center'
    light?: boolean
  }>(),
  {
    titleTag: 'h2',
    align: 'left',
    light: false,
  },
)
</script>

<template>
  <div
    class="rt-section-heading"
    :class="{
      'rt-desktop-text-center': align === 'center',
    }"
  >
    <div
      v-if="eyebrow"
      class="rt-sub-text-gap rt-overflow-hidden"
    >
      <div
        class="rt-sub-text"
        :class="light ? 'rt-text-color-white' : 'rt-text-color-black'"
      >
        {{ eyebrow }}
      </div>
    </div>
    <component
      :is="titleTag"
      class="rt-gap-off"
      :class="light ? 'rt-text-color-white' : undefined"
    >
      {{ title }}
    </component>
    <div
      v-if="$slots.default"
      class="rt-button-to-para"
    >
      <slot />
    </div>
  </div>
</template>
