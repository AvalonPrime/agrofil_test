<script setup lang="ts">
import type { AppButtonVariant } from '~/types/ui'
import { BUTTON_ICON_SRC, BUTTON_INTERACTION_ID } from '~/constants/assets'

const props = withDefaults(
  defineProps<{
    label: string
    to?: string
    href?: string
    variant?: AppButtonVariant
    interactionId?: string
    iconSrc?: string
    ariaLabel?: string
  }>(),
  {
    variant: 'green',
    interactionId: BUTTON_INTERACTION_ID,
    iconSrc: BUTTON_ICON_SRC,
  },
)

const linkHref = computed(() => props.to || props.href || '#')

const variantAttr = computed(() =>
  props.variant === 'green' ? 'base' : props.variant,
)
</script>

<template>
  <NuxtLink
    :aria-label="ariaLabel || label"
    class="rt-button-box w-inline-block"
    :data-w-id="interactionId"
    :data-wf--rt-button-green--variant="variantAttr"
    :to="linkHref"
  >
    <div class="rt-button-text-wrapper">
      <div class="rt-button-text rt-one">
        {{ label }}
      </div>
      <div class="rt-button-text rt-two">
        {{ label }}
      </div>
    </div>
    <div class="rt-button-icon-wrapper">
      <AppImage
        :src="iconSrc"
        alt=""
        class="rt-button-icon rt-1"
        loading="lazy"
      />
      <AppImage
        :src="iconSrc"
        alt=""
        class="rt-button-icon rt-2"
        loading="lazy"
      />
    </div>
    <div class="rt-button-bg" />
  </NuxtLink>
</template>
