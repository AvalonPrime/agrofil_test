/**
 * Home CTA/fonts were migrated to R2; keep those CSS overrides on CDN.
 * Do NOT rewrite every /assets/* img to R2 — only Home media (~92 files)
 * were uploaded, so nav/UI icons must stay on Nuxt public/assets.
 *
 * Strapi media already returns absolute R2 URLs from the API.
 */
export default defineNuxtPlugin(() => {
  const cdn = String(useRuntimeConfig().public.assetsCdn || '').replace(/\/$/, '')
  if (!cdn || !import.meta.client) return

  const style = document.createElement('style')
  style.setAttribute('data-assets-cdn', 'true')
  style.textContent = `
.rt-cta {
  background-image: url("${cdn}/assets/69dcb1e13b7796e93cb90166_CTA-image.webp") !important;
}
.rt-cta-item {
  background-image: url("${cdn}/assets/69e5d07870644466e9f3872c_Rectangle-1.webp") !important;
}
@font-face {
  font-family: Ltsuperior;
  src: url("${cdn}/assets/69cb4ef78e238aadb9408246_ltsuperior-regular.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Ltsuperior;
  src: url("${cdn}/assets/69cb4ef843e5277fd4d193ed_ltsuperior-semibold.otf") format("opentype");
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Ltsuperior;
  src: url("${cdn}/assets/69cb4ef7daa708e4cdf547fd_ltsuperior-bold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: Ltsuperior;
  src: url("${cdn}/assets/69cb4ef78d60f5e59c9fbbc6_ltsuperior-medium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
`
  document.head.appendChild(style)
})
