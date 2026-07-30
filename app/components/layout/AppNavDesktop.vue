<script setup lang="ts">
const { t, localePath } = useCmsCopy()
</script>

<template>
<div class="w-layout-hflex rt-desktop-menu">
           <a aria-current="page" class="rt-navbar-toggle w-inline-block" :href="localePath('/')">
            <div class="rt-nav-text">
             {{ t('nav.home') }}
            </div>
           </a>
           <a class="rt-navbar-toggle w-inline-block" :href="localePath('/about')">
            <div class="rt-nav-text">
             {{ t('nav.about') }}
            </div>
           </a>
           <a class="rt-navbar-toggle w-inline-block" :href="localePath('/products')">
            <div class="rt-nav-text">
             {{ t('nav.products') }}
            </div>
           </a>
           <a class="rt-navbar-toggle w-inline-block" :href="localePath('/contact')">
            <div class="rt-nav-text">
             {{ t('nav.contact') }}
            </div>
           </a>
          </div>
</template>
