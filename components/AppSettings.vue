<template>
  <div class="max-w-2xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <!-- Card -->
    <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-900">
      <div class="text-center mb-8">
        <h2
          class="text-2xl md:text-3xl font-bold text-gray-800 dark:text-neutral-200">
          {{ t("section.title") }}
        </h2>
        <p class="text-sm text-gray-600 dark:text-neutral-400">
          {{ t("section.subtitle") }}
        </p>
      </div>
      <div>
        <SectionDivider class="fw-bold mt-4">{{ t("app.title") }}
        </SectionDivider>
        <div class="grid sm:grid-cols-12 gap-2 sm:gap-6">
          <div class="sm:col-span-3">
            <label
              class="font-bold inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
              {{ t("app.theme") }}
            </label>
          </div>
          <div class="sm:col-span-9 text-end">
            <div class="mt-2.5">
              <AppThemeSwitcher />
            </div>
          </div>
          <div class="sm:col-span-3">
            <label
              class="font-bold inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
              {{ t("app.language") }}
            </label>
          </div>
          <div class="sm:col-span-9 text-end">
            <AppLanguageSelector />
          </div>
        </div>
        <SectionDivider class="font-bold mt-4">Seats.aero API</SectionDivider>
        <Alert type="warning" :title="t('seats.title')" class="mb-4"
          v-show="apiKey == ''">
          <p>{{ t('seats.body') }}</p>
          <p>{{ t('seats.referral') }} <a
              :href="config.public.seatsAeroReferralLink ?? 'https://seats.aero/'"
              target="_blank" class="font-bold hover:underline">{{
              $t('strings.referral_link')
              }}.</a></p>
          <p>{{ t('seats.account') }} <a href="https://seats.aero/apikey"
              target="_blank" class="font-bold hover:underline">{{
              $t('strings.here') }}.</a>
          </p>
        </Alert>

        <Alert type="success" :title="t('tools.title')" class="mb-4"
          v-show="apiKey != ''">
          <p>{{ t('tools.body') }} <NuxtLink to="/tools"
              class="font-bold hover:underline">{{
              $t('strings.here') }}.</NuxtLink>
          </p>
        </Alert>
        <div class="flex flex-col gap-4 ">
          <AppApiKey />
          <AppApiUsage />
        </div>
      </div>
    </div>
  </div>
  <div>
  </div>
</template>
<script setup>

import { useSeatsAeroApiStore } from '@/stores/seatsAeroApi'

const store = useSeatsAeroApiStore()
const { apiKey } = storeToRefs(store)
const config = useRuntimeConfig()

const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="json">{
  "en": {
    "section": {
      "title": "Settings",
      "subtitle": "Configure your toolkit"
    },
    "app": {
      "title": "Your Toolkit",
      "theme": "Theme",
      "language": "Language"
    },
    "seats": {
      "title": "Seats.aero PRO subscription required",
      "body": "To obtain a Seat.aero API key, you must have a Seat.aero Pro subscription.",
      "referral": "If you don't have one, you can subscribe using our",
      "account": "If you already have a subscription, you can get the API key"
    },
    "tools": {
      "title": "Seats.aero API configured correctly",
      "body": "You can start using our tools now. To check all available tools click"
    }
  },
  "pt": {
    "section": {
      "title": "Configurações",
      "subtitle": "Configure seu toolkit"
    },
    "app": {
      "title": "Seu Toolkit",
      "theme": "Tema",
      "language": "Idioma"
    },
    "seats": {
      "title": "Assinatura Seats.aero PRO necessária",
      "body": "Para obter uma chave de API do Seat.aero, você deve ter uma assinatura Seat.aero Pro.",
      "referral": "Se você não tiver uma, pode se inscrever usando nosso",
      "account": "Se você já tem uma assinatura, pode obter a chave de API"
    },
    "tools": {
      "title": "Chave API Seats.aero configurada corretamente",
      "body": "Você pode começar a usar nossas ferramentas agora. Para ver todas as ferramentas disponíveis, clique"
    }
  }
}
</i18n>
