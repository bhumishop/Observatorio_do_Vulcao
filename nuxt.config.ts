// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Dynamic base URL for GitHub Pages
  app: {
    baseURL: process.env.NUXT_PUBLIC_BASE_URL || '/',
    head: {
      title: 'Observatório do Vulcão',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Observatório do Vulcão - Dashboard de Monitoramento' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  // Nitro config for static export
  nitro: {
    preset: 'static'
  },

  // Generate static site
  routeRules: {
    '/**': { prerender: true }
  }
})
