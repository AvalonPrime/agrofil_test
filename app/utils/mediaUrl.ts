/**
 * Resolve media paths for local assets, Strapi uploads, or Assets CDN (R2).
 *
 * Local site chrome (`/assets/*` in public/) stays on Nuxt — only a subset
 * of Home media was migrated to R2. Strapi-managed files already come as
 * absolute R2 URLs from the API.
 */
export function resolveMediaUrl(src: string, strapiUrl = '', assetsCdn = ''): string {
  if (!src) {
    return ''
  }

  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:') || src.startsWith('blob:')) {
    return src
  }

  // Keep UI / fallback assets on the Nuxt origin (complete set in public/assets)
  if (src.startsWith('/assets/')) {
    return src
  }

  if (src.startsWith('/')) {
    if (src.startsWith('/uploads/') && strapiUrl) {
      return `${strapiUrl.replace(/\/$/, '')}${src}`
    }
    return src
  }

  const base = (assetsCdn || strapiUrl).replace(/\/$/, '')
  if (!base) {
    return src.startsWith('assets/') ? `/${src}` : src
  }

  return `${base}${src.startsWith('/') ? src : `/${src}`}`
}

/** Rewrite every /assets/... occurrence inside a string (srcset, data-attrs, css). */
export function rewriteAssetsCdn(value: string, assetsCdn: string): string {
  const cdn = assetsCdn.replace(/\/$/, '')
  if (!cdn || !value || !value.includes('/assets/')) return value
  return value.replace(/(^|[\s,"'(=])\/assets\//g, `$1${cdn}/assets/`)
}
