<script setup lang="ts">
const { t } = useCmsCopy()

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
<section ref="root" class="rt-faq-v1-wrap agro-enter-root">
      <div class="w-layout-blockcontainer rt-container-main w-container">
       <div class="rt-center-content rt-faq-gap">
        <div class="rt-products-v1-top rt-desktop-text-center">
         <div class="rt-sub-text-gap rt-overflow-hidden">
          <div class="rt-sub-text agro-enter agro-enter--d1">
           {{ t('contact.faqEyebrow') }}
          </div>
         </div>
         <div class="rt-overflow-hidden">
          <h2 class="rt-gap-off agro-enter agro-enter--d2">
           {{ t('contact.faqTitle') }}
          </h2>
         </div>
        </div>
        <div class="rt-contact-faq-v1-wrap">
         <div class="rt-faq-v1">
          <div class="rt-dropdown" data-w-id="3ef6dbad-832d-8342-7ef2-8d12380da15b">
           <div class="w-layout-hflex rt-dropdown-wrap">
            <div class="w-layout-hflex rt-dropdown-left">
             <div>
              <div class="rt-text-style-h5 rt-color-gray">
               01
              </div>
             </div>
             <div class="rt-dropdown-content-wrappert">
              <div class="rt-dropdown-toggle">
               <div class="rt-text-style-h5">
                {{ t('contact.faq1Q') }}
               </div>
              </div>
              <div class="rt-overflow-hidden rt-faq-dropdown-list" style="width:100%;height:0px">
               <div class="rt-answer-wrap">
                <p class="rt-gap-off">
                 {{ t('contact.faq1A') }}
                </p>
               </div>
              </div>
             </div>
            </div>
            <div class="w-layout-vflex rt-icon-wrap">
             <div class="rt-bar">
             </div>
             <div class="rt-bar rt-bar-rotate" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)">
             </div>
            </div>
           </div>
          </div>
          <div class="rt-dropdown" data-w-id="3ef6dbad-832d-8342-7ef2-8d12380da16c">
           <div class="w-layout-hflex rt-dropdown-wrap">
            <div class="w-layout-hflex rt-dropdown-left">
             <div>
              <div class="rt-text-style-h5 rt-color-gray">
               02
              </div>
             </div>
             <div class="rt-dropdown-content-wrappert">
              <div class="rt-dropdown-toggle">
               <div class="rt-text-style-h5">
                {{ t('contact.faq2Q') }}
               </div>
              </div>
              <div class="rt-overflow-hidden rt-faq-dropdown-list" style="width:100%;height:0px">
               <div class="rt-answer-wrap">
                <p class="rt-gap-off">
                 {{ t('contact.faq2A') }}
                </p>
               </div>
              </div>
             </div>
            </div>
            <div class="w-layout-vflex rt-icon-wrap">
             <div class="rt-bar">
             </div>
             <div class="rt-bar rt-bar-rotate" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)">
             </div>
            </div>
           </div>
          </div>
          <div class="rt-dropdown" data-w-id="3ef6dbad-832d-8342-7ef2-8d12380da17d">
           <div class="w-layout-hflex rt-dropdown-wrap">
            <div class="w-layout-hflex rt-dropdown-left">
             <div>
              <div class="rt-text-style-h5 rt-color-gray">
               03
              </div>
             </div>
             <div class="rt-dropdown-content-wrappert">
              <div class="rt-dropdown-toggle">
               <div class="rt-text-style-h5">
                {{ t('contact.faq3Q') }}
               </div>
              </div>
              <div class="rt-overflow-hidden rt-faq-dropdown-list" style="width:100%;height:0px">
               <div class="rt-answer-wrap">
                <p class="rt-gap-off">
                 {{ t('contact.faq3A') }}
                </p>
               </div>
              </div>
             </div>
            </div>
            <div class="w-layout-vflex rt-icon-wrap">
             <div class="rt-bar">
             </div>
             <div class="rt-bar rt-bar-rotate" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)">
             </div>
            </div>
           </div>
          </div>
          <div class="rt-dropdown" data-w-id="3ef6dbad-832d-8342-7ef2-8d12380da18e">
           <div class="w-layout-hflex rt-dropdown-wrap">
            <div class="w-layout-hflex rt-dropdown-left">
             <div>
              <div class="rt-text-style-h5 rt-color-gray">
               04
              </div>
             </div>
             <div class="rt-dropdown-content-wrappert">
              <div class="rt-dropdown-toggle">
               <div class="rt-text-style-h5">
                {{ t('contact.faq4Q') }}
               </div>
              </div>
              <div class="rt-overflow-hidden rt-faq-dropdown-list" style="width:100%;height:0px">
               <div class="rt-answer-wrap">
                <p class="rt-gap-off">
                 {{ t('contact.faq4A') }}
                </p>
               </div>
              </div>
             </div>
            </div>
            <div class="w-layout-vflex rt-icon-wrap">
             <div class="rt-bar">
             </div>
             <div class="rt-bar rt-bar-rotate" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)">
             </div>
            </div>
           </div>
          </div>
         </div>
         <div class="rt-faq-v1">
          <div class="rt-dropdown" data-w-id="a109d527-83ae-5a15-a522-8968a5459a7f">
           <div class="w-layout-hflex rt-dropdown-wrap">
            <div class="w-layout-hflex rt-dropdown-left">
             <div>
              <div class="rt-text-style-h5 rt-color-gray">
               05
              </div>
             </div>
             <div class="rt-dropdown-content-wrappert">
              <div class="rt-dropdown-toggle">
               <div class="rt-text-style-h5">
                {{ t('contact.faq5Q') }}
               </div>
              </div>
              <div class="rt-overflow-hidden rt-faq-dropdown-list" style="width:100%;height:0px">
               <div class="rt-answer-wrap">
                <p class="rt-gap-off">
                 {{ t('contact.faq5A') }}
                </p>
               </div>
              </div>
             </div>
            </div>
            <div class="w-layout-vflex rt-icon-wrap">
             <div class="rt-bar">
             </div>
             <div class="rt-bar rt-bar-rotate" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)">
             </div>
            </div>
           </div>
          </div>
          <div class="rt-dropdown" data-w-id="a109d527-83ae-5a15-a522-8968a5459a90">
           <div class="w-layout-hflex rt-dropdown-wrap">
            <div class="w-layout-hflex rt-dropdown-left">
             <div>
              <div class="rt-text-style-h5 rt-color-gray">
               06
              </div>
             </div>
             <div class="rt-dropdown-content-wrappert">
              <div class="rt-dropdown-toggle">
               <div class="rt-text-style-h5">
                {{ t('contact.faq6Q') }}
               </div>
              </div>
              <div class="rt-overflow-hidden rt-faq-dropdown-list" style="width:100%;height:0px">
               <div class="rt-answer-wrap">
                <p class="rt-gap-off">
                 {{ t('contact.faq6A') }}
                </p>
               </div>
              </div>
             </div>
            </div>
            <div class="w-layout-vflex rt-icon-wrap">
             <div class="rt-bar">
             </div>
             <div class="rt-bar rt-bar-rotate" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)">
             </div>
            </div>
           </div>
          </div>
          <div class="rt-dropdown" data-w-id="a109d527-83ae-5a15-a522-8968a5459aa1">
           <div class="w-layout-hflex rt-dropdown-wrap">
            <div class="w-layout-hflex rt-dropdown-left">
             <div>
              <div class="rt-text-style-h5 rt-color-gray">
               07
              </div>
             </div>
             <div class="rt-dropdown-content-wrappert">
              <div class="rt-dropdown-toggle">
               <div class="rt-text-style-h5">
                {{ t('contact.faq7Q') }}
               </div>
              </div>
              <div class="rt-overflow-hidden rt-faq-dropdown-list" style="width:100%;height:0px">
               <div class="rt-answer-wrap">
                <p class="rt-gap-off">
                 {{ t('contact.faq7A') }}
                </p>
               </div>
              </div>
             </div>
            </div>
            <div class="w-layout-vflex rt-icon-wrap">
             <div class="rt-bar">
             </div>
             <div class="rt-bar rt-bar-rotate" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)">
             </div>
            </div>
           </div>
          </div>
          <div class="rt-dropdown" data-w-id="a109d527-83ae-5a15-a522-8968a5459ab2">
           <div class="w-layout-hflex rt-dropdown-wrap">
            <div class="w-layout-hflex rt-dropdown-left">
             <div>
              <div class="rt-text-style-h5 rt-color-gray">
               08
              </div>
             </div>
             <div class="rt-dropdown-content-wrappert">
              <div class="rt-dropdown-toggle">
               <div class="rt-text-style-h5">
                {{ t('contact.faq8Q') }}
               </div>
              </div>
              <div class="rt-overflow-hidden rt-faq-dropdown-list" style="width:100%;height:0px">
               <div class="rt-answer-wrap">
                <p class="rt-gap-off">
                 {{ t('contact.faq8A') }}
                </p>
               </div>
              </div>
             </div>
            </div>
            <div class="w-layout-vflex rt-icon-wrap">
             <div class="rt-bar">
             </div>
             <div class="rt-bar rt-bar-rotate" style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(90deg) skew(0, 0)">
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
     </section>
</template>
