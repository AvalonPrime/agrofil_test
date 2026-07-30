<script setup lang="ts">
import type { AppAccordionItem } from '~/types/ui'

defineProps<{
  items: AppAccordionItem[]
}>()

const openId = ref<string | null>(null)

function toggle(id: string) {
  openId.value = openId.value === id ? null : id
}
</script>

<template>
  <div class="rt-faq-list">
    <div
      v-for="item in items"
      :key="item.id"
      class="rt-faq-item"
      :class="{ 'is-open': openId === item.id }"
    >
      <button
        class="rt-faq-question"
        type="button"
        @click="toggle(item.id)"
      >
        {{ item.title }}
      </button>
      <div
        v-show="openId === item.id"
        class="rt-faq-answer"
      >
        <p>{{ item.body }}</p>
      </div>
    </div>
  </div>
</template>
