<script setup lang="ts">
import type { CatalogProduct } from '~/composables/useProductCatalog'

const props = defineProps<{
  product: CatalogProduct
}>()

const { t, localePath } = useCmsCopy()
const { localizedBody, getGroup, localizedGroupName } = useProductCatalog()

const group = computed(() => getGroup(props.product.group))

const activeImage = ref(0)
const images = computed(() =>
  props.product.images.length
    ? props.product.images
    : [
        {
          src: props.product.coverImage,
          alt: props.product.name,
          file: 'cover',
          sourceUrl: '',
        },
      ],
)

const coverSrc = computed(
  () => images.value[activeImage.value]?.src || props.product.coverImage,
)

type BodyBlock =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }

/** Clean scraped product text into blog-like richtext blocks. */
const bodyBlocks = computed((): BodyBlock[] => {
  const raw = localizedBody(props.product)
  if (!raw) return []

  const lines = raw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .filter((l) => !/^- \*\*/.test(l))
    .filter((l) => !/^Home »/.test(l))
    .filter((l) => !/previous slide|next slide/i.test(l))

  const blocks: BodyBlock[] = []
  let paraBuf: string[] = []
  let listBuf: string[] = []
  let mode: 'text' | 'packs' | 'dosage' = 'text'

  const flushPara = () => {
    if (!paraBuf.length) return
    const text = paraBuf.join(' ').replace(/\s+/g, ' ').trim()
    if (text) blocks.push({ type: 'p', text })
    paraBuf = []
  }

  const flushList = (title?: string) => {
    if (title) blocks.push({ type: 'h3', text: title })
    if (listBuf.length) {
      blocks.push({ type: 'ul', items: [...listBuf] })
      listBuf = []
    }
  }

  for (const line of lines) {
    if (/^Chemichal Composition|^Chemical Composition/i.test(line)) {
      flushPara()
      flushList()
      blocks.push({ type: 'h3', text: line.replace(/:$/, '') })
      mode = 'text'
      continue
    }

    if (/^(PLANT|DOSAGE|APPLICATION|SO[Iİ]L APPL|LEAVES APPL)/i.test(line) && line.length < 40) {
      flushPara()
      if (mode !== 'dosage') {
        mode = 'dosage'
        flushList('Application / dosage')
      }
      // skip header labels themselves if standalone
      if (/^(PLANT|DOSAGE|APPLICATION)$/i.test(line)) continue
      continue
    }

    // Pack sizes like 1 Kg / 1LT / 5 LT
    if (/^\d+(\.\d+)?\s*(Kg|kg|LT|Lt|lt|L|ml|g|tl)\b/i.test(line)) {
      flushPara()
      if (mode !== 'packs') {
        mode = 'packs'
        flushList('Pack sizes')
      }
      listBuf.push(line)
      continue
    }

    if (mode === 'dosage') {
      // Accumulate dosage rows as list items when short lines look like data
      if (line.length < 120 || /\d+\s*(g|kg|cc|lt|m²|m2)/i.test(line)) {
        listBuf.push(line)
        continue
      }
    }

    if (mode === 'packs') {
      flushList('Pack sizes')
      mode = 'text'
    }

    // Product name duplicate of h1 — skip first exact match
    if (
      paraBuf.length === 0 &&
      blocks.length === 0 &&
      line.toLowerCase() === props.product.name.toLowerCase()
    ) {
      continue
    }

    // Formula line in parentheses alone
    if (/^\([^)]+\)$/.test(line)) {
      flushPara()
      blocks.push({ type: 'h3', text: line })
      continue
    }

    paraBuf.push(line)
  }

  flushPara()
  if (mode === 'packs') flushList('Pack sizes')
  if (mode === 'dosage') flushList()

  return blocks
})

function nextImage() {
  activeImage.value = (activeImage.value + 1) % images.value.length
}
function prevImage() {
  activeImage.value =
    (activeImage.value - 1 + images.value.length) % images.value.length
}

const root = ref<HTMLElement | null>(null)
let io: IntersectionObserver | null = null

onMounted(() => {
  const el = root.value
  if (!el || !import.meta.client) return
  el.classList.add('agro-enter-root--visible')
  io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          el.classList.add('agro-enter-root--visible')
          io?.disconnect()
        }
      }
    },
    { threshold: 0.05 },
  )
  io.observe(el)
})

onBeforeUnmount(() => io?.disconnect())
</script>

<template>
  <div
    ref="root"
    class="rt-product-detail-blog agro-enter-root"
  >
    <section class="rt-dlog-details-banner rt-overflow-hidden">
      <div class="w-layout-blockcontainer rt-container-main w-container">
        <div class="rt-dlog-details-hero-wrap">
          <div class="rt-dlog-details-hero-heading">
            <h1 class="rt-gap-off rt-text-color-white agro-enter agro-enter--d1">
              {{ t('products.detailEyebrow') }}
            </h1>
          </div>
          <div class="rt-dlog-details-hero-content rt-overflow-hidden rt-border-main agro-enter agro-enter--d2">
            <img
              :alt="product.name"
              class="rt-product-detail-hero-img"
              :src="coverSrc"
            >
            <div class="rt-dlog-details-hero-content-inner">
              <div class="rt-blog-item-content-details">
                <div class="w-layout-hflex rt-calendar-wrap">
                  <div class="rt-image-center">
                    <img
                      alt=""
                      class="rt-invert"
                      loading="lazy"
                      src="/assets/69dcf18d1903c6b32e770875_Vector.svg"
                    >
                  </div>
                  <div class="rt-blog-date-top-gap">
                    <div class="rt-sub-text rt-text-color-white">
                      {{ group ? localizedGroupName(group) : product.group }}
                    </div>
                  </div>
                </div>
                <h2 class="rt-gap-off rt-text-color-white">
                  {{ product.name }}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="rt-blog-details-wrap-padding">
      <section class="rt-blog-details">
        <div class="w-layout-blockcontainer rt-container-main w-container">
          <div class="rt-blog-details-wrapper">
            <div class="w-layout-hflex rt-blog-details-left agro-enter agro-enter--d1">
              <div class="rt-product-detail-side">
                <NuxtLink
                  v-if="group"
                  class="rt-sub-text rt-text-color-green"
                  :to="localePath(`/products/${group.slug}`)"
                >
                  ← {{ localizedGroupName(group) }}
                </NuxtLink>

                <div class="rt-product-detail-side-gallery">
                  <div class="rt-product-detail-side-main rt-border-main rt-overflow-hidden">
                    <img
                      :alt="product.name"
                      :src="coverSrc"
                    >
                  </div>
                  <template v-if="images.length > 1">
                    <div class="rt-product-detail-nav">
                      <button
                        class="rt-product-detail-nav-btn"
                        type="button"
                        @click="prevImage"
                      >
                        ‹
                      </button>
                      <span class="rt-sub-text">{{ activeImage + 1 }} / {{ images.length }}</span>
                      <button
                        class="rt-product-detail-nav-btn"
                        type="button"
                        @click="nextImage"
                      >
                        ›
                      </button>
                    </div>
                    <div class="rt-product-detail-thumbs">
                      <button
                        v-for="(img, i) in images"
                        :key="img.file || i"
                        class="rt-product-detail-thumb"
                        :class="{ 'is-active': i === activeImage }"
                        type="button"
                        @click="activeImage = i"
                      >
                        <img
                          :alt="img.alt || product.name"
                          loading="lazy"
                          :src="img.src"
                        >
                      </button>
                    </div>
                  </template>
                </div>
              </div>
            </div>

            <div class="rt-blog-details-right">
              <div class="rt-blog-details-gap agro-enter agro-enter--d2">
                <div class="rt-rich-text-change-v1 w-richtext">
                  <template
                    v-for="(block, i) in bodyBlocks"
                    :key="i"
                  >
                    <h3 v-if="block.type === 'h3'">
                      {{ block.text }}
                    </h3>
                    <p v-else-if="block.type === 'p'">
                      {{ block.text }}
                    </p>
                    <ul
                      v-else-if="block.type === 'ul'"
                      role="list"
                    >
                      <li
                        v-for="(item, j) in block.items"
                        :key="j"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </template>
                </div>
              </div>

              <div class="agro-enter agro-enter--d3">
                <NuxtLink
                  class="rt-button-box w-inline-block"
                  data-wf--rt-button-green--variant="base"
                  :to="localePath('/contact')"
                >
                  <div class="rt-button-text-wrapper">
                    <div class="rt-button-text rt-one">
                      {{ t('products.askQuote') }}
                    </div>
                    <div class="rt-button-text rt-two">
                      {{ t('products.askQuote') }}
                    </div>
                  </div>
                  <div class="rt-button-icon-wrapper">
                    <img
                      alt=""
                      class="rt-button-icon rt-1"
                      loading="lazy"
                      src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
                    >
                    <img
                      alt=""
                      class="rt-button-icon rt-2"
                      loading="lazy"
                      src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
                    >
                  </div>
                  <div class="rt-button-bg" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
