import { defineNuxtConfig } from 'nuxt/config'
import { i18n } from './config'

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
    'nuxt-gtag',
    '@nuxtjs/i18n',
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
    '/tools/routes/yearly-calendar': { redirect: '/tools/yearly-calendar' },
  },
  runtimeConfig: {
    seatsAeroApiToken: process.env.SEATSAERO_API_TOKEN,
    public: {
      seatsAeroApiPath: process.env.SEATSAERO_API_BASE_URL,
      seatsAeroReferralLink: process.env.SEATSAERO_REFERRAL_LINK,
      appName: process.env.APP_NAME,
      i18n: {
        baseUrl: process.env.APP_URL,
      },
    },
  },
  gtag: {
    id: process.env.GTAG_ID,
  },
  i18n,
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
