import { revealStuckHeroNodes } from '~/composables/useWebflow'

/**
 * Last-resort above-the-fold visibility after IX2 entrances should have finished.
 * Running earlier snaps mid-tween (opacity: 0.7 matched as "opacity: 0") and
 * turns slide-ins into an instant pop.
 */
export default defineNuxtPlugin((nuxtApp) => {
  if (!import.meta.client) {
    return
  }

  nuxtApp.hook('page:finish', () => {
    window.setTimeout(() => revealStuckHeroNodes(), 3500)
  })
})
