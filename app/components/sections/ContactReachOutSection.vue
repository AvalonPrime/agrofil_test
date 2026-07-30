<script setup lang="ts">
const { t } = useCmsCopy()

const phoneHref = computed(() => {
  const digits = t('contact.phone').replace(/[^\d+]/g, '')
  return `tel:${digits}`
})

const root = ref<HTMLElement | null>(null)
let io: IntersectionObserver | null = null

onMounted(() => {
  const el = root.value
  if (!el) {
    return
  }

  io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.add('agro-enter-root--visible')
          io?.disconnect()
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  )
  io.observe(el)
})

onBeforeUnmount(() => {
  io?.disconnect()
})
</script>

<template>
<section ref="root" class="rt-reach-out agro-enter-root">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="w-layout-hflex rt-reach-out-wrapper">
        <div class="rt-contact-v1-left">
         <div class="rt-contact-v1-left-heading rt-overflow-hidden">
          <h2 class="rt-gap-off agro-enter agro-enter--d1">
           {{ t('contact.reachTitle') }}
          </h2>
         </div>
         <div class="rt-contact-v1-left-middle">
          <div class="w-layout-vflex rt-contact-v1-left-middle-item agro-enter agro-enter--d2">
           <div class="rt-sub-text">
            {{ t('contact.emailLabel') }}
           </div>
           <a class="rt-text-style-h5" :href="`mailto:${t('contact.email')}`">
            {{ t('contact.email') }}
           </a>
           <a class="rt-text-style-h5" :href="`mailto:${t('contact.emailExport')}`">
            {{ t('contact.emailExport') }}
           </a>
          </div>
          <div class="w-layout-vflex rt-contact-v1-left-middle-item agro-enter agro-enter--d3" id="w-node-_3eaaf8f6-4d66-5279-35f8-582c68c87957-4e9edfc8">
           <div class="rt-sub-text">
            {{ t('contact.phoneLabel') }}
           </div>
           <a class="rt-text-style-h5" :href="phoneHref">
            {{ t('contact.phone') }}
           </a>
          </div>
          <div class="w-layout-vflex rt-contact-v1-left-middle-item agro-enter agro-enter--d4" id="w-node-_3eaaf8f6-4d66-5279-35f8-582c68c8795c-4e9edfc8">
           <div class="rt-sub-text">
            {{ t('contact.locationLabel') }}
           </div>
           <div class="rt-contact-v1-location">
            <div class="rt-text-style-h5">
             {{ t('contact.address') }}
            </div>
           </div>
          </div>
         </div>
         <div class="rt-overflow-hidden">
          <div class="w-layout-hflex rt-contact-v1-left-bottom agro-enter agro-enter--d5">
           <a class="rt-contact-v1-left-bottom-link w-inline-block" href="https://www.facebook.com/">
            <div class="rt-text-style-h6">
             Facebook
            </div>
            <div class="w-layout-vflex rt-conatct-v1-link-arrow">
             <img alt="" loading="lazy" src="/assets/69d886496a9a3134da4cf825_contact-social-link-arrow.svg"/>
            </div>
           </a>
           <a class="rt-contact-v1-left-bottom-link w-inline-block" href="https://www.linkedin.com/">
            <div class="rt-text-style-h6">
             LinkedIn
            </div>
            <div class="w-layout-vflex rt-conatct-v1-link-arrow">
             <img alt="" loading="lazy" src="/assets/69d886496a9a3134da4cf825_contact-social-link-arrow.svg"/>
            </div>
           </a>
           <a class="rt-contact-v1-left-bottom-link w-inline-block" href="https://www.instagram.com/">
            <div class="rt-text-style-h6">
             Instagram
            </div>
            <div class="w-layout-vflex rt-conatct-v1-link-arrow">
             <img alt="" loading="lazy" src="/assets/69d886496a9a3134da4cf825_contact-social-link-arrow.svg"/>
            </div>
           </a>
          </div>
         </div>
        </div>
        <div class="rt-contact-v1-right agro-enter agro-enter--d3">
         <div class="rt-form-block w-form">
          <ContactForm />
          <div class="rt-sucess-message w-form-done">
           <div class="rt-text-color-black">
            {{ t('contact.formSuccess') }}
           </div>
          </div>
          <div class="rt-error-ms w-form-fail">
           <div>
            {{ t('contact.formError') }}
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
