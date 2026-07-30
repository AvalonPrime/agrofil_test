<script setup lang="ts">
const { t } = useHomeCopy()
const media = useHomeMedia()
</script>

<template>
  <section class="rt-trusted">
    <div class="w-layout-blockcontainer rt-container-main w-container">
      <div
        class="rt-trusted-top"
        data-w-id="61ac2deb-5bd8-5cd5-6b0d-fdcf1b9cfb7c"
      >
        <div
          class="rt-counter-box rt-big-marquree-text rt-big-height"
          data-w-id="61ac2deb-5bd8-5cd5-6b0d-fdcf1b9cfb7d"
        >
          <div class="rt-counter">
            <div class="rt-counter-train rt-two">
              <div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>1</div><div>0</div><div>0</div><div>0</div><div>+</div>
            </div>
            <div class="rt-counter-train">
              <div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div><div>9</div><div>1</div><div>0</div><div>0</div><div>0</div><div>+</div>
            </div>
          </div>
          <div class="rt-counter-plus">
            +
          </div>
        </div>
        <div class="rt-trusted-top-text">
          <div class="rt-sub-text">
            {{ t('home.trusted') }}
          </div>
        </div>
      </div>
      <div class="rt-trusted-container">
        <div
          class="w-layout-grid rt-partners-grid"
          data-w-id="61ac2deb-5bd8-5cd5-6b0d-fdcf1b9cfbba"
        >
          <div
            v-for="(logo, index) in media.trustedLogos"
            :key="`${index}-${logo}`"
            class="rt-partners-card"
            data-w-id="61ac2deb-5bd8-5cd5-6b0d-fdcf1b9cfbbb"
          >
            <div class="rt-partners-icon">
              <img
                alt=""
                class="rt-partners-logo rt-1"
                height="30"
                loading="lazy"
                :src="logo"
                width="105"
              >
              <img
                alt=""
                class="rt-partners-logo rt-2"
                height="30"
                loading="lazy"
                :src="logo"
                width="105"
              >
            </div>
            <div
              class="rt-partners-over"
              :class="{ 'rt-2': index >= 5 }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
