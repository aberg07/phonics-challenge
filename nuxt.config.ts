// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['@fortawesome/vue-fontawesome'] //Without this, errors pop up in console saying icons could not be found even when they're rendered
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls: false
      }
    }
  },

  modules: ["@nuxt/content"],
  compatibilityDate: '2024-11-26'
})