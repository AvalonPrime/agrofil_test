<script setup lang="ts">
import { blogPosts } from '~/data/blog-posts'

const { posts, fetchPosts } = useBlogContent()

// Prefer content layer; fall back to static data so the list never stays empty.
try {
  await fetchPosts()
} catch {
  posts.value = blogPosts
}

if (!posts.value.length) {
  posts.value = blogPosts
}
</script>

<template>
  <section
    id="rt-blog-1"
    class="rt-blog-gap"
  >
    <PageContainer>
      <div class="w-dyn-list">
        <div
          class="rt-blog-v1-wrap w-dyn-items"
          role="list"
        >
          <BlogCard
            v-for="post in posts"
            :key="post.id"
            :post="post"
          />
        </div>
        <div
          aria-label="List"
          class="w-pagination-wrapper rt-pagination"
          data-w-id="4cdf204d-5e44-4fb4-b889-80e0782d542f"
          role="navigation"
        >
          <div
            aria-label="Page 1 of 2"
            class="w-page-count rt-text-style-h6 rt-pagination-text"
            role="heading"
          >
            1 / 2
          </div>
          <NuxtLink
            aria-label="Next Page"
            class="w-pagination-next rt-previous"
            to="/"
          >
            <div class="rt-image-center">
              <AppImage
                src="/assets/69dcdb539a9f30f23463d589_Blog-icon-right.svg"
                alt=""
                loading="lazy"
              />
            </div>
          </NuxtLink>
          <link
            href="/"
            rel="prerender"
          >
        </div>
      </div>
    </PageContainer>
  </section>
</template>
