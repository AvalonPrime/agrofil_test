<script setup lang="ts">
import type { BlogPost } from '~/types/content'

const props = defineProps<{
  post: BlogPost
}>()

const href = computed(() => `/post/${props.post.attributes.slug}`)
const cover = computed(() => props.post.attributes.cover?.data?.attributes)
</script>

<template>
  <div
    class="w-dyn-item"
    role="listitem"
  >
    <div
      class="w-layout-vflex rt-blog-v1-item"
      data-w-id="0808aa16-7103-a7f7-fa85-4afc7fecffcb"
    >
      <NuxtLink
        aria-label="blog image"
        class="rt-border-main rt-overflow-hidden w-inline-block"
        :to="href"
      >
        <AppImage
          v-if="cover"
          :src="cover.url"
          :srcset="cover.srcset || undefined"
          :alt="cover.alternativeText || post.attributes.title"
          class="rt-scale-image"
          loading="lazy"
          sizes="100vw"
        />
      </NuxtLink>
      <div class="rt-blog-v1-item-content-wrap">
        <div class="rt-blog-v1-item-content">
          <div class="w-layout-hflex rt-calendar-wrap">
            <div class="rt-image-center">
              <AppImage
                src="/assets/69dcd5d2c0e9a902f7d76e90_Blog-icon-v2.svg"
                alt=""
                loading="lazy"
              />
            </div>
            <div class="rt-blog-date-top-gap">
              <div class="rt-sub-text rt-text-color-green">
                {{ post.attributes.publishedAt }}
              </div>
            </div>
          </div>
          <NuxtLink
            aria-label="Blog Text"
            class="rt-text-style-h4"
            :to="href"
          >
            {{ post.attributes.title }}
          </NuxtLink>
        </div>
        <NuxtLink
          aria-label="Blog Button"
          class="rt-blog-v1-item-button w-inline-block"
          :to="href"
        >
          <div class="rt-center-content rt-blog-v1-item-icon rt-overflow-hidden">
            <AppImage
              src="/assets/69dcd5d24cf5716e80cddfee_Blog-icon-v1.svg"
              alt=""
              class="rt-blog-v1-icon-1"
              loading="lazy"
            />
            <AppImage
              src="/assets/69dcd5d24cf5716e80cddfee_Blog-icon-v1.svg"
              alt=""
              class="rt-blog-v1-icon-2"
              loading="lazy"
            />
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
