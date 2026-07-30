<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

useHead({
  title: 'Page not found | Agrofil',
  meta: [
    {
      name: 'description',
      content:
        "Oops! The page you are looking for cannot be found. Return to the homepage to explore Agrofil fertilizers and services.",
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
</script>

<template>
  <ClientOnly>
    <NotFoundSection home-to="/" />
    <template #fallback>
      <div class="harvestam-markup harvestam-markup--loading" />
    </template>
  </ClientOnly>
</template>
