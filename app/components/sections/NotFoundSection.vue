<script setup lang="ts">
/**
 * Shared 404 / not-found markup (Webflow utility page).
 */
withDefaults(
  defineProps<{
    homeTo?: string
  }>(),
  {
    homeTo: '/',
  },
)
</script>

<template>
  <div class="harvestam-markup">
    <div class="rt-utility-page-wrap rt-404-utility">
      <div class="rt-utility-page-content rt-404-content">
        <div class="rt-404-left">
          <div class="rt-404-content">
            <img
              alt="404-image"
              loading="lazy"
              src="/assets/69e8702d7376bf33a7bfe80f_404-image.webp"
            >
          </div>
          <div>
            <div class="rt-404-heading">
              <h1 class="rt-gap-off">
                Oops! Page not found
              </h1>
            </div>
            <div class="rt-button-to-para rt-text-color-green">
              The page you are looking for doesn't exist or has been moved
            </div>
            <a
              class="rt-button-box w-inline-block"
              data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd"
              data-wf--rt-button-green--variant="base"
              :href="homeTo"
            >
              <div class="rt-button-text-wrapper">
                <div class="rt-button-text rt-one">
                  Back to home
                </div>
                <div class="rt-button-text rt-two">
                  Back to home
                </div>
              </div>
              <div class="rt-button-icon-wrapper">
                <img
                  alt=""
                  class="rt-button-icon rt-1"
                  loading="lazy"
                  src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
                >
                <img
                  alt=""
                  class="rt-button-icon rt-2"
                  loading="lazy"
                  src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
                >
              </div>
              <div class="rt-button-bg" />
            </a>
          </div>
        </div>
        <div class="rt-404-image-wrap">
          <div
            class="rt-404-video rt-border-main rt-overflow-hidden w-background-video w-background-video-atom"
            data-autoplay="true"
            data-loop="true"
            data-poster-url="/assets/69e1bd2e9717f73995302c55_14751780_1080_1920_24fps (1)_poster.0000000.jpg"
            data-video-urls="/assets/69e1bd2e9717f73995302c55_14751780_1080_1920_24fps (1)_mp4.mp4,/assets/69e1bd2e9717f73995302c55_14751780_1080_1920_24fps (1)_webm.webm"
            data-wf-ignore="true"
          >
            <video
              id="e01a0bb9-e4c5-49e7-56ee-0b6a27c7e73d-video"
              autoplay
              data-object-fit="cover"
              data-wf-ignore="true"
              loop
              muted
              playsinline
              style='background-image:url("/assets/69e1bd2e9717f73995302c55_14751780_1080_1920_24fps (1)_poster.0000000.jpg")'
            >
              <source
                data-wf-ignore="true"
                src="/assets/69e1bd2e9717f73995302c55_14751780_1080_1920_24fps%20%281%29_mp4.mp4"
              >
              <source
                data-wf-ignore="true"
                src="/assets/69e1bd2e9717f73995302c55_14751780_1080_1920_24fps%20%281%29_webm.webm"
              >
            </video>
            <div
              class="rt-service-video-play-wrap"
              data-w-id="76e81a6f-135f-968d-5e0b-8f61bdb76ee5"
              style="opacity:0"
            >
              <div class="rt-hero-v1-play-button rt-2">
                <div
                  class="rt-video-v1-button-wrap"
                  data-w-id="76e81a6f-135f-968d-5e0b-8f61bdb76ee7"
                >
                  <div
                    class="rt-video-v1-button-border rt-radius-full rt-one"
                    style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1"
                  />
                  <div
                    class="rt-video-v1-button-border rt-radius-full rt-two"
                    style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1"
                  />
                  <div
                    class="rt-video-v1-button-border rt-radius-full rt-three"
                    style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);opacity:1"
                  />
                  <noscript>
                    <img
                      alt=""
                      data-wf-bgvideo-fallback-img="true"
                      src="/assets/69e1bd2e9717f73995302c55_14751780_1080_1920_24fps%20%281%29_poster.0000000.jpg"
                    >
                  </noscript>
                  <div aria-live="polite">
                    <button
                      aria-controls="e01a0bb9-e4c5-49e7-56ee-0b6a27c7e73d-video"
                      class="w-backgroundvideo-backgroundvideoplaypausebutton rt-hero-v1-play-pause-button rt-service-one-change w-background-video--control"
                      data-w-bg-video-control="true"
                      type="button"
                    >
                      <span class="rt-image-center">
                        <img
                          alt="Pause video"
                          loading="lazy"
                          src="/assets/69cb620ffbfe45cf1054cdf2_698f03e09f2ba3ef5f5c8778_video-white-pause-icon.svg"
                        >
                      </span>
                      <span class="rt-image-center" hidden>
                        <img
                          alt="Play video"
                          loading="lazy"
                          src="/assets/69cb620f6d00e2de6aa0a79a_698f03e09f2ba3ef5f5c8779_video-white-play-icon.svg"
                        >
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="rt-404-video-overlay">
              <div class="rt-sub-text rt-text-color-white">
                404
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <section class="rt-cta">
        <div class="w-layout-blockcontainer rt-container-main w-container">
          <div class="rt-cta-content">
            <div
              class="rt-cta-item"
              data-w-id="f06cc7df-2c93-fb7b-c73b-b615c63c648a"
            >
              <h2 class="rt-gap-off rt-text-color-white">
                Discover the benefits of natural farming and fresh produce
              </h2>
              <a
                class="rt-button-box w-inline-block"
                data-w-id="c0cd2ce2-c868-017a-12e7-b8dedcd4c4dd"
                data-wf--rt-button-green--variant="base"
                href="/contact"
              >
                <div class="rt-button-text-wrapper">
                  <div class="rt-button-text rt-one">
                    Contact us now
                  </div>
                  <div class="rt-button-text rt-two">
                    Contact us now
                  </div>
                </div>
                <div class="rt-button-icon-wrapper">
                  <img
                    alt=""
                    class="rt-button-icon rt-1"
                    loading="lazy"
                    src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
                  >
                  <img
                    alt=""
                    class="rt-button-icon rt-2"
                    loading="lazy"
                    src="/assets/69cb5a1bc3c8ef7a8bd2fbba_Button-icon.svg"
                  >
                </div>
                <div class="rt-button-bg" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
