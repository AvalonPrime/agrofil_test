// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const rootDir = fileURLToPath(new URL('.', import.meta.url))

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  components: {
    dirs: [
      { path: '~/components/ui', pathPrefix: false },
      { path: '~/components/layout', pathPrefix: false },
      { path: '~/components/sections', pathPrefix: false },
      { path: '~/components/common', pathPrefix: false },
    ],
  },
  runtimeConfig: {
    public: {
      /** Strapi CMS base URL — Home uses /api/home?locale=&populate=* */
      strapiUrl: process.env.NUXT_PUBLIC_STRAPI_URL || 'http://localhost:1337',
      /**
       * Cloudflare R2 public base for /assets/* (Home media).
       * Example: https://pub-xxx.r2.dev
       */
      assetsCdn:
        process.env.NUXT_PUBLIC_ASSETS_CDN ||
        'https://pub-3e3c3a769d1744f88deb9f1f5e44a252.r2.dev',
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
        class: 'w-mod-js w-mod-ix',
      },
      link: [
        {
          rel: 'shortcut icon',
          href: '/assets/69e77e3a5575371c8f02b575_Fav-icon-small.svg',
          type: 'image/x-icon',
        },
        {
          rel: 'apple-touch-icon',
          href: '/assets/69e77ebce6d0caffdc1d57ed_Fav-icon-big.svg',
        },
      ],
    },
  },
  nitro: {
    publicAssets: [
      {
        baseURL: 'product-media',
        dir: resolve(rootDir, '../agrofil_products/by-group'),
        maxAge: 60 * 60 * 24 * 7,
      },
    ],
    routeRules: {
      '/contact-one': { redirect: { to: '/contact', statusCode: 301 } },
      '/assets/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/product-media/**': {
        headers: {
          'cache-control': 'public, max-age=604800',
        },
      },
    },
  },
  vite: {
    vue: {
      template: {
        // Webflow markup uses /assets/ paths served from public/ — do not bundle as imports.
        transformAssetUrls: false,
      },
    },
  },
  css: ['~/assets/css/i18n.css', '~/assets/css/webflow-overrides.css'],
})
