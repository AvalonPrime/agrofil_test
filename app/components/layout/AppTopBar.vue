<script setup lang="ts">
const { t } = useCmsCopy()

const marqueeItems = computed(() =>
  Array.from({ length: 3 }, () => [
    { type: 'sep' as const },
    { type: 'text' as const, value: t('topbar') },
    { type: 'sep' as const },
    { type: 'text' as const, value: t('topbar') },
    { type: 'sep' as const },
    { type: 'text' as const, value: t('topbar') },
  ]),
)
</script>

<template>
  <div class="rt-nav-top rt-1">
    <div class="rt-nav-top-in">
      <div class="rt-text-color-white rt-top-text">
        {{ t('topbar') }}
      </div>
    </div>
  </div>
  <div class="rt-nav-top rt-2">
    <div
      class="rt-nav-top-in"
      data-w-id="057d6bd0-2d0f-91e3-ecf9-daf2c28ca0bc"
    >
      <div
        v-for="(group, gi) in marqueeItems"
        :key="gi"
        class="rt-nav-top-in-wrapper"
      >
        <div
          v-for="(item, ii) in group"
          :key="ii"
          class="rt-nav-top-in-text"
        >
          <div class="rt-text-color-white rt-top-text">
            {{ item.type === 'sep' ? '|' : item.value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
