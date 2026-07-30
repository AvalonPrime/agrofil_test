<script setup lang="ts">
const home = useHomeCopy()
const cms = useCmsCopy()
const media = useHomeMedia()

const props = withDefaults(
  defineProps<{
    title?: string
    buttonLabel?: string
    buttonTo?: string
  }>(),
  {
    title: '',
    buttonLabel: '',
    buttonTo: '/contact',
  },
)

const resolvedTitle = computed(
  () => props.title || home.t('cta.title') || cms.t('cta.title'),
)
const resolvedButtonLabel = computed(
  () => props.buttonLabel || home.t('cta.button') || cms.t('cta.button'),
)

const ctaStyle = computed(() => ({
  backgroundImage: `url("${media.value.ctaBg}")`,
}))
const ctaItemStyle = computed(() => ({
  backgroundImage: `url("${media.value.ctaOverlay}")`,
}))
</script>

<template>
  <section
    class="rt-cta"
    :style="ctaStyle"
  >
    <PageContainer>
      <div class="rt-cta-content">
        <div
          class="rt-cta-item"
          data-w-id="f06cc7df-2c93-fb7b-c73b-b615c63c648a"
          :style="ctaItemStyle"
        >
          <h2 class="rt-gap-off rt-text-color-white">
            {{ resolvedTitle }}
          </h2>
          <AppButton
            :label="resolvedButtonLabel"
            :to="buttonTo"
          />
        </div>
      </div>
    </PageContainer>
  </section>
</template>
