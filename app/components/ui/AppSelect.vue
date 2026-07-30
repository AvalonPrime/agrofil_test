<script setup lang="ts">
import type { AppSelectOption } from '~/types/ui'

const props = withDefaults(
  defineProps<{
    name: string
    id?: string
    options: AppSelectOption[]
    dataName?: string
    required?: boolean
    class?: string
  }>(),
  {},
)

const model = defineModel<string>({ default: '' })

const selectId = computed(() => props.id || props.name)
const fieldClass = computed(
  () => props.class || 'rt-text-field-v3 rt-selact w-select',
)
</script>

<template>
  <select
    :id="selectId"
    v-model="model"
    :class="fieldClass"
    :data-name="dataName || name"
    :name="name"
    :required="required"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>
