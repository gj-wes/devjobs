// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  },
  css: ['@/assets/css/reset.css', '@/assets/css/global.css'],
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      'Kumbh+Sans': [400, 700]
    }
  }
})
