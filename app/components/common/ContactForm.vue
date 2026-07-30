<script setup lang="ts">
/**
 * Contact form markup (Webflow fields).
 * Wire submit logic later via useContactForm composable.
 */
const { t } = useCmsCopy()
</script>

<template>
<form class="rt-contact-us-form" data-name="Contact Form V1" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e" data-wf-element-id="83fd2715-efdb-8c80-f2af-e037c5ce6bf8" data-wf-page-id="69ce2f8c3a3d66b54e9edfc8" id="wf-form-Contact-Form-V1" method="get" name="wf-form-Contact-Form-V1">
           <div class="w-layout-vflex rt-colaboration-form-inner">
            <input class="rt-text-field-v3 w-input" data-name="First Name" id="First-Name" maxlength="256" name="First-Name" :placeholder="t('contact.namePlaceholder')" required type="text"/>
            <div class="w-layout-hflex rt-text-field-flexbox">
             <input class="rt-text-field-v3 w-input" data-name="Email" id="Email" maxlength="256" name="Email" :placeholder="t('contact.emailPlaceholder')" required type="email"/>
             <input class="rt-text-field-v3 w-input" data-name="Phone Number" id="Phone-Number" maxlength="256" name="Phone-Number" :placeholder="t('contact.phonePlaceholder')" required type="tel"/>
            </div>
            <div class="w-layout-hflex rt-text-field-flexbox">
             <select class="rt-text-field-v3 rt-selact w-node-f0bb43fa-6f81-81ce-a2b6-06915f9ded48-4e9edfc8 w-select" data-name="Farming" id="Farming" name="Farming">
              <option value="">
               {{ t('contact.farmingPlaceholder') }}
              </option>
              <option value="Mixed farming">
               {{ t('contact.farmingMixed') }}
              </option>
              <option value="Agroforestry">
               {{ t('contact.farmingAgroforestry') }}
              </option>
              <option value="Plantation farming">
               {{ t('contact.farmingPlantation') }}
              </option>
             </select>
             <select class="rt-text-field-v3 rt-selact w-node-f0bb43fa-6f81-81ce-a2b6-06915f9ded49-4e9edfc8 w-select" data-name="Subject" id="Subject" name="Subject">
              <option value="">
               {{ t('contact.subjectPlaceholder') }}
              </option>
              <option value="Agriculture">
               {{ t('contact.subjectAgriculture') }}
              </option>
              <option value="Agronomy">
               {{ t('contact.subjectAgronomy') }}
              </option>
              <option value="Horticulture">
               {{ t('contact.subjectHorticulture') }}
              </option>
             </select>
            </div>
            <textarea class="rt-text-field-v3 rt-text-area w-input" data-name="Message" id="Message" maxlength="5000" name="Message" :placeholder="t('contact.messagePlaceholder')"></textarea>
           </div>
           <div class="rt-submit-button-main" data-w-id="83fd2715-efdb-8c80-f2af-e037c5ce6c02">
            <input class="rt-submit-button w-button" data-wait="Please wait..." type="submit" :value="t('contact.submit')"/>
            <a class="rt-button-box w-variant-aead16ee-b77f-4b5e-f75b-e1f4e4752171 w-inline-block" data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd" data-wf--rt-button-green--variant="full-width" href="#">
             <div class="rt-button-text-wrapper">
              <div class="rt-button-text rt-one">
               {{ t('contact.submitNow') }}
              </div>
              <div class="rt-button-text rt-two">
               {{ t('contact.submitNow') }}
              </div>
             </div>
             <div class="rt-button-icon-wrapper">
              <img alt="" class="rt-button-icon rt-1" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"/>
              <img alt="" class="rt-button-icon rt-2" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"/>
             </div>
             <div class="rt-button-bg">
             </div>
            </a>
           </div>
          </form>
</template>
