<template>
  <div class="harvestam-markup">
    <div
      class="rt-all-top"
      data-wf--rt-navbar--variant="base"
    >
      <AppTopBar />
      <div
        class="rt-navbar w-nav"
        data-animation="default"
        data-collapse="medium"
        data-duration="400"
        data-easing="ease"
        data-easing2="ease"
        data-w-id="057d6bd0-2d0f-91e3-ecf9-daf2c28ca0db"
        role="banner"
      >
        <div class="rt-navbar-all">
          <div class="rt-container-main rt-nav-wrap">
            <div class="w-layout-hflex rt-header-v1-main">
              <AppNavBrand />
              <nav
                class="rt-nav-menu w-nav-menu"
                role="navigation"
              >
                <AppNavDesktop />
                <AppNavMobile />
              </nav>
              <div class="w-layout-hflex rt-header-locale-actions">
                <AppLocaleSwitch />
                <AppNavActions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rt-header-locale-actions {
  align-items: center;
  gap: 4px;
}
</style>
