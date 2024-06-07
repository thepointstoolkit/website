import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    "~/plugins/preline.client.ts",
  ],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", 'nuxt-icon', "@nuxt/eslint"],
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  routeRules: {
    '/': { prerender: true },
    '/api/*': {
      cache: { maxAge: 60 * 15 }
    },
  },
  runtimeConfig: {
    seatsAeroApiToken: process.env.SEATSAERO_API_TOKEN,
    public: {
      seatsAeroApiPath: process.env.SEATSAERO_API_BASE_URL
    },
  },
  eslint: {
    config: {
      stylistic: true
    }
  }
})
