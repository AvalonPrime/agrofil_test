<script setup lang="ts">
const { t, localePath } = useCmsCopy()
const logoSrc = useSiteLogo()

const phoneDisplay = computed(() => t('footer.phone') || t('contact.phone') || '+90 552 634 44 43')
const phoneHref = computed(() => {
  const digits = phoneDisplay.value.replace(/[^\d+]/g, '')
  return `tel:${digits}`
})
const address = computed(
  () =>
    t('footer.address') ||
    t('contact.address') ||
    'Fevziçakmak Mah. 10762. Sok. A1-Blok No: 12C Karatay / KONYA',
)

const description = computed(() => t('footer.description'))
const marqueeText = computed(() => t('footer.marquee'))

const quickLinks = computed(() => [
  { label: t('nav.home'), to: localePath('/') },
  { label: t('nav.about'), to: localePath('/about') },
  { label: t('nav.products'), to: localePath('/products') },
  { label: t('nav.contact'), to: localePath('/contact') },
])

const utilityLinks = computed(() => [
  { label: 'Style guide', to: localePath('/style-guide') },
  { label: 'License', to: localePath('/license') },
  { label: 'Changelog', to: localePath('/changelog') },
  { label: t('nav.passwordProtected'), to: localePath('/401') },
  { label: '404', to: localePath('/404') },
])

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com' },
  { label: 'Behance', href: 'https://www.behance.net/' },
  { label: 'Linkedin', href: 'https://www.linkedin.com' },
] as const
</script>

<template>
  <div class="harvestam-markup">
    <footer class="rt-footer">
      <div class="rt-top-footer-border" />
      <PageContainer>
        <div class="rt-footer-top">
          <div class="rt-footer-top-left">
            <div class="rt-footer-logo">
              <NuxtLink
                aria-label="Main logo"
                class="rt-footer-logo-icon w-inline-block"
                :to="localePath('/')"
              >
                <AppImage
                  :src="logoSrc"
                  alt="Agrofil"
                  loading="lazy"
                />
              </NuxtLink>
            </div>
            <p class="rt-button-to-para rt-text-color-white">
              {{ description }}
            </p>
            <AppButton
              :label="t('cta.button')"
              :to="localePath('/contact')"
            />
          </div>
          <div class="rt-footer-top-right">
            <div class="rt-footer-heading">
              <div>
                <div class="rt-footer-heading-text rt-text-style-h5 rt-text-color-white">
                  {{ t('nav.contact') }}
                </div>
                <div class="rt-footer-top-content-link">
                  <a
                    class="rt-footer-link w-inline-block"
                    data-w-id="2861d947-e240-c4a6-2e9e-5585083d683a"
                    :href="phoneHref"
                  >
                    <div class="rt-menu-text rt-footer-color">
                      {{ phoneDisplay }}
                    </div>
                    <div class="rt-footer-link-line" />
                  </a>
                </div>
              </div>
              <div>
                <div class="rt-footer-heading-text rt-text-style-h5 rt-text-color-white">
                  Address
                </div>
                <div class="rt-menu-text rt-footer-color">
                  {{ address }}
                  <br>
                </div>
              </div>
            </div>
            <div
              id="w-node-_2861d947-e240-c4a6-2e9e-5585083d6843-083d6828"
              class="rt-footer-heading"
            >
              <div class="rt-footer-center">
                <div class="rt-footer-heading-text rt-text-style-h5 rt-text-color-white">
                  {{ t('footer.quickLinks') }}
                </div>
                <div class="rt-footer-top-content-link">
                  <NuxtLink
                    v-for="link in quickLinks"
                    :key="link.to"
                    class="rt-footer-link w-inline-block"
                    :to="link.to"
                  >
                    <div class="rt-menu-text rt-footer-color">
                      {{ link.label }}
                    </div>
                    <div class="rt-footer-link-line" />
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div
              id="w-node-_2861d947-e240-c4a6-2e9e-5585083d685c-083d6828"
              class="rt-footer-heading"
            >
              <div>
                <div class="rt-footer-heading-text rt-text-style-h5 rt-text-color-white">
                  {{ t('footer.utilityPages') }}
                </div>
                <div class="rt-footer-top-content-link">
                  <NuxtLink
                    v-for="link in utilityLinks"
                    :key="link.to"
                    class="rt-footer-link w-inline-block"
                    :to="link.to"
                  >
                    <div class="rt-menu-text rt-footer-color">
                      {{ link.label }}
                      <br>
                    </div>
                    <div class="rt-footer-link-line" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rt-footer-buttom">
          <div class="rt-footer-buttom-left rt-menu-text">
            <div>
              Designed by
            </div>
            <a
              class="rt-footer-link w-inline-block"
              data-w-id="2861d947-e240-c4a6-2e9e-5585083d687d"
              href="https://www.radianttemplates.com"
            >
              <div class="rt-menu-text rt-text-color-white">
                Radiant Templates.
              </div>
              <div class="rt-footer-link-line" />
            </a>
            <div>
              Powered by
            </div>
            <a
              class="rt-footer-link w-inline-block"
              data-w-id="2861d947-e240-c4a6-2e9e-5585083d6883"
              href="https://webflow.com"
            >
              <div class="rt-menu-text rt-text-color-white">
                Webflow.
              </div>
              <div class="rt-footer-link-line" />
            </a>
          </div>
          <div class="rt-footer-buttom-right">
            <template
              v-for="(link, index) in socialLinks"
              :key="link.href"
            >
              <a
                class="rt-footer-link w-inline-block"
                :href="link.href"
              >
                <div class="rt-sub-text rt-text-color-white">
                  {{ link.label }}
                </div>
                <div class="rt-footer-link-line" />
              </a>
              <div
                v-if="index < socialLinks.length - 1"
                class="rt-footer-buttom-line"
              />
            </template>
          </div>
        </div>
      </PageContainer>
      <div
        class="rt-footer-marquee"
        data-w-id="2861d947-e240-c4a6-2e9e-5585083d689b"
      >
        <div class="rt-footer-marquee-inner">
          <div
            v-for="n in 3"
            :key="n"
            class="rt-footer-marquee-item"
          >
            <div
              v-for="m in 3"
              :key="m"
              class="rt-big-marquree-text"
            >
              {{ marqueeText }}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
