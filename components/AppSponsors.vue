<template>
  <SectionTitle
    :title="t('section.title')"
    :subtitle="t('section.subtitle')"
  />
  <SponsorList>
    <SponsorBadge
      v-for="sponsor in sponsors"
      :key="sponsor.title"
      :flag="sponsor.flag"
      :title="sponsor.title"
      :subtitle="sponsor.subtitle"
      :url="sponsor.url"
      :avatar="sponsor.avatar"
    />
  </SponsorList>
  <div class="mt-12 justify-center flex items-center gap-y-2 flex-col">
    <span class="text-sm text-gray-500 dark:text-neutral-400">
      {{ t('section.cta') }}
    </span>
    <div
      class="border border-gray-200 py-2 px-3 rounded-full dark:border-neutral-700"
    >
      <NuxtLink
        class="inline-flex items-center gap-x-1 align-middle text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:text-red-500 dark:text-red-500 dark:hover:text-red-600 dark:focus:text-red-600"
        href="mailto:sponsors@thepointstoolkit.com"
      >
        sponsors@thepointstoolkit.com
        <svg
          class="shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { sponsors } from '@/data'

const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="json">
{
  "en": {
    "section": {
      "title": "Our Sponsors",
      "subtitle": "Their support and collaboration enable us to bring you the best tools, resources, and insights for optimizing your award travel.",
      "cta": "Interested in supporting the project? Email us at"
    }
  },
  "pt": {
    "section": {
      "title": "Nossos Patrocinadores",
      "subtitle": "Seu apoio e colaboração nos permitem oferecer as melhores ferramentas, recursos e insights para otimizar sua viagem com pontos e milhas.",
      "cta": "Interessado em apoiar o projeto? Envie-nos um e-mail"
    }
  }
}
</i18n>
