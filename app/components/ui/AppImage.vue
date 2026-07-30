<script setup lang="ts">
import { resolveMediaUrl } from '~/utils/mediaUrl'

const props = withDefaults(
  defineProps<{
    src: string
    alt?: string
    class?: string
    width?: string | number
    height?: string | number
    loading?: 'lazy' | 'eager'
    sizes?: string
    srcset?: string
  }>(),
  {
    alt: '',
    loading: 'lazy',
  },
)

const config = useRuntimeConfig()

const resolvedSrc = computed(() =>
  resolveMediaUrl(
    props.src,
    config.public.strapiUrl as string,
    config.public.assetsCdn as string,
  ),
)

const resolvedSrcset = computed(() => {
  if (!props.srcset) {
    return undefined
  }
  const strapiUrl = config.public.strapiUrl as string
  const assetsCdn = config.public.assetsCdn as string
  return props.srcset
    .split(',')
    .map((part) => {
      const [url, descriptor] = part.trim().split(/\s+/, 2)
      const resolved = resolveMediaUrl(url, strapiUrl, assetsCdn)
      return descriptor ? `${resolved} ${descriptor}` : resolved
    })
    .join(', ')
})
</script>

<template>
  <img
    :alt="alt"
    :class="props.class"
    :height="height"
    :loading="loading"
    :sizes="sizes"
    :src="resolvedSrc"
    :srcset="resolvedSrcset"
    :width="width"
  >
</template>
