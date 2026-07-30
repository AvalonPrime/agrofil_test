<script setup lang="ts">
definePageMeta({
  layout: "blank",
})

useHead({
  title: "Harvestam - Webflow HTML website template",
  meta: [
    { name: 'description', content: "This page is protected. Enter the password to securely access exclusive Harvestam farming resources, organic solutions, and private agricultural content." },
  ],
  htmlAttrs: {
    lang: 'en',
    'data-wf-domain': 'harvestam.local',
    'data-wf-page': "69ce2e1c1e01ec2708c8ef32",
    'data-wf-site': "69ca70f522188cd4145a7334",
  },
  bodyAttrs: {
    class: 'w-mod-js',
  },
})

useWebflow(["/assets/js/jquery-3.5.1.min.dc5e7f18c8.js", "/assets/js/webflow.schunk.36b8fb49256177c8.js", "/assets/js/webflow.schunk.ad17b92b1fe67175.js", "/assets/js/webflow.e7fbbd9c.333b55538e1f5031.js"])
</script>

<template>
<ClientOnly>
  <div v-pre class="harvestam-markup">
    <div class="rt-utility-page-wrap">
     <div class="rt-utility-page-content w-password-page w-form">
      <form action="/.wf_auth" class="rt-401-form w-password-page" data-name="Email Form" data-wf-element-id="69ce2e1c1e01ec2708c8ef3500000000000c" data-wf-page-id="69ce2e1c1e01ec2708c8ef32" id="email-form" method="post" name="email-form">
       <div class="rt-401-wrapper">
        <div class="rt-401-icon">
         <div class="rt-image-center">
          <img alt="" src="/assets/69e1b4359ea731e643651447_Icon-password.svg"/>
         </div>
        </div>
        <h2 class="rt-gap-off">
         Password protected
        </h2>
        <input autofocus="true" class="rt-text-field-401 w-password-page w-input" data-name="field" id="pass" maxlength="256" name="pass" placeholder="Enter your password*" type="password"/>
        <div class="rt-submit-button-main rt-v3" data-w-id="cf21539a-0fdd-9c31-7e2e-210100ac676c">
         <input class="rt-submit-button w-password-page w-button" data-wait="Please wait..." type="submit" value="Submit"/>
         <a class="rt-button-box rt-width w-inline-block" href="#">
          <div class="rt-button-text-wrapper">
           <div class="rt-button-text rt-one" style="-webkit-transform:translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
            Submit now
           </div>
           <div class="rt-button-text rt-two" style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
            Submit now
           </div>
          </div>
          <div class="rt-button-icon-wrapper">
           <img alt="" class="rt-button-icon rt-1" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg" style="-webkit-transform:translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0%, 0%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"/>
           <img alt="" class="rt-button-icon rt-2" loading="lazy" src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg" style="-webkit-transform:translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-100%, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"/>
          </div>
          <div class="rt-button-bg" style="-webkit-transform:translate3d(-102%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-102%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-102%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-102%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)">
          </div>
         </a>
        </div>
       </div>
       <div class="rt-error-ms w-password-page w-form-fail">
        <div>
         Incorrect password. Please try again.
        </div>
       </div>
       <div class="w-password-page w-embed w-script" style="display:none">
        <input name="path" type="hidden" value="&lt;%WF_FORM_VALUE_PATH%&gt;"/>
        <input name="page" type="hidden" value="&lt;%WF_FORM_VALUE_PAGE%&gt;"/>
       </div>
       <div class="w-password-page w-embed w-script" style="display:none">
       </div>
      </form>
     </div>
    </div>
  </div>
  <template #fallback>
    <div class="harvestam-markup harvestam-markup--loading" />
  </template>
</ClientOnly>
</template>
