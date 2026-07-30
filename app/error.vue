<script setup lang="ts">
/**
 * Global error page — unknown routes and thrown 404s use the branded NotFound UI.
 * @see https://nuxt.com/docs/getting-started/error-handling#error-page
 */
import type { NuxtError } from '#app'

const props = defineProps<{
  error: NuxtError
}>()

const isNotFound = computed(() => Number(props.error?.statusCode) === 404)

useHead({
  title: computed(() =>
    isNotFound.value
      ? 'Page not found | Agrofil'
      : `Error ${props.error?.statusCode || ''} | Agrofil`,
  ),
  link: [
    {
      rel: 'stylesheet',
      href: '/assets/css/harvestam.webflow.shared.5ced799cc.css',
    },
    {
      rel: 'stylesheet',
      href: '/assets/fonts/inter-tight.css',
    },
  ],
})

useWebflow([
  '/assets/js/jquery-3.5.1.min.dc5e7f18c8.js',
  '/assets/js/webflow.schunk.36b8fb49256177c8.js',
  '/assets/js/webflow.schunk.ad17b92b1fe67175.js',
  '/assets/js/webflow.schunk.9dfb96661114d3db.js',
  '/assets/js/webflow.ba5fae89.63a0615f3ce5ac83.js',
])

function goHome(event?: Event) {
  event?.preventDefault()
  clearError({ redirect: '/' })
}

function onNotFoundClick(event: MouseEvent) {
  const el = event.target as HTMLElement | null
  if (el?.closest?.('a.rt-button-box[href="/"]')) {
    goHome(event)
  }
}
</script>

<template>
  <NuxtLayout name="default">
    <ClientOnly>
      <div v-if="isNotFound" @click.capture="onNotFoundClick">
        <NotFoundSection home-to="/" />
      </div>
      <div
        v-else
        class="harvestam-markup"
        style="padding: 6rem 1.5rem; text-align: center"
      >
        <h1 class="rt-gap-off">
          {{ error.statusCode || 'Error' }}
        </h1>
        <p class="rt-button-to-para rt-text-color-green">
          {{ error.statusMessage || error.message || 'Something went wrong' }}
        </p>
        <a
          class="rt-button-box w-inline-block"
          href="/"
          style="margin-top: 1.5rem"
          @click="goHome"
        >
          <div class="rt-button-text-wrapper">
            <div class="rt-button-text rt-one">
              Back to home
            </div>
            <div class="rt-button-text rt-two">
              Back to home
            </div>
          </div>
        </a>
      </div>
      <template #fallback>
        <div class="harvestam-markup harvestam-markup--loading" />
      </template>
    </ClientOnly>
  </NuxtLayout>
</template>
