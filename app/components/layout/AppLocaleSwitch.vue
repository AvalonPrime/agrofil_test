<script setup lang="ts">
import type { AppLocale } from '~/composables/useAppI18n'

const { locale, locales, t, setLocale } = useAppI18n()
const open = ref(false)

const currentLabel = computed(() => t(`locale.${locale.value}`))

function selectLocale(code: AppLocale) {
  setLocale(code)
  open.value = false
}

function onDocClick(event: MouseEvent) {
  const target = event.target
  if (!(target instanceof Element)) {
    return
  }
  if (!target.closest('.rt-locale-switch')) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
})
</script>

<template>
  <div
    class="rt-locale-switch"
    :class="{ 'is-open': open }"
  >
    <button
      class="rt-locale-switch__btn"
      type="button"
      :aria-expanded="open"
      aria-haspopup="listbox"
      @click.stop="open = !open"
    >
      <span class="rt-locale-switch__label">
        {{ currentLabel }}
      </span>
      <span
        class="rt-locale-switch__caret"
        aria-hidden="true"
      />
    </button>
    <ul
      v-show="open"
      class="rt-locale-switch__menu"
      role="listbox"
    >
      <li
        v-for="item in locales"
        :key="item.code"
        role="option"
        :aria-selected="item.code === locale"
      >
        <button
          class="rt-locale-switch__option"
          type="button"
          :class="{ 'is-active': item.code === locale }"
          @click="selectLocale(item.code)"
        >
          {{ t(item.labelKey) }}
        </button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.rt-locale-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-inline-end: 12px;
  z-index: 1000;
}

.rt-locale-switch__btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  cursor: pointer;
  padding: 6px 4px;
  white-space: nowrap;
}

.rt-locale-switch__label {
  font-size: 14px;
  line-height: 1.2;
  color: #fff;
}

.rt-locale-switch__caret {
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 5px solid #fff;
  opacity: 0.85;
}

.rt-locale-switch__menu {
  position: absolute;
  top: 100%;
  /* Physical sides — avoid RTL logical inset mismatch with LTR header shell */
  right: 0;
  left: auto;
  min-width: 180px;
  margin: 0;
  /* Invisible bridge so cursor can move from button → menu without gaps */
  padding: 10px 0 8px;
  list-style: none;
  background: #fff;
  background-clip: padding-box;
  border-radius: 12px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.18);
  z-index: 1001;
  direction: ltr;
}

.rt-locale-switch__menu::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: -12px;
  height: 12px;
}

.rt-locale-switch__option {
  width: 100%;
  border: 0;
  background: transparent;
  text-align: start;
  padding: 10px 14px;
  font: inherit;
  font-size: 14px;
  color: #13261a;
  cursor: pointer;
}

.rt-locale-switch__option:hover,
.rt-locale-switch__option.is-active {
  background: #eef6e8;
}

:global(.is-rtl) .rt-locale-switch {
  direction: ltr;
}

:global(.is-rtl) .rt-locale-switch__label,
:global(.is-rtl) .rt-locale-switch__option {
  direction: rtl;
  unicode-bidi: isolate;
  text-align: right;
  font-family: inherit;
}
</style>
