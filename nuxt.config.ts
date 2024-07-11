import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/preline.client.ts',
  ],
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-icon',
    '@nuxt/eslint',
    "nuxt-gtag"
  ],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  routeRules: {
    '/': { prerender: true },
    '/api/*': {
      cache: { maxAge: 60 * 15 },
    },
  },
  runtimeConfig: {
    seatsAeroApiToken: process.env.SEATSAERO_API_TOKEN,
    public: {
      seatsAeroApiPath: process.env.SEATSAERO_API_BASE_URL,
      appName: process.env.APP_NAME,
    },
  },
  gtag: {
    id: process.env.GTAG_ID
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
