import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  devtools: { enabled: true },

  head: {
      title: "danielsanrocha.com",
      meta: [
          { charset: 'utf-8' },
          { name: 'viewport', content: 'width=device-width, initial-scale=1' },
          { hid: 'description', name: 'description', content: "Personal Webpage" }
      ],
      link: [
          {
              rel: 'stylesheet',
              href: "https://fonts.googleapis.com/css?family=Roboto&display=swap"
          },
          {
              rel: 'stylesheet',
              href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          }
      ]
  },

  components: [
    {
        path: '~/components',
        pathPrefix: false,
    }
  ],

  script: [],
  modules: ['@nuxt/icon'],
  experimental: {
    appManifest: false
  },
  compatibilityDate: '2024-09-06'
})
