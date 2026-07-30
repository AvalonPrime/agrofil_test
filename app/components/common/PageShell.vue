<script setup lang="ts">
/**
 * Page content wrapper. Schedules a single IX2 bind after markup is painted.
 */
onMounted(() => {
  scheduleWebflowBoot('page-shell-mounted')
})
</script>

<template>
  <div class="harvestam-markup">
    <slot />
  </div>
</template>
