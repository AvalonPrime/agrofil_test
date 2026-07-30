<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string
    id?: string
    placeholder?: string
    required?: boolean
    maxlength?: number | string
    dataName?: string
    class?: string
  }>(),
  {
    maxlength: 5000,
  },
)

const model = defineModel<string>({ default: '' })

const inputId = computed(() => props.id || props.name)
const fieldClass = computed(
  () => props.class || 'rt-text-field-v3 rt-text-area w-input',
)
</script>

<template>
  <textarea
    :id="inputId"
    v-model="model"
    :class="fieldClass"
    :data-name="dataName || name"
    :maxlength="maxlength"
    :name="name"
    :placeholder="placeholder"
    :required="required"
  />
</template>
