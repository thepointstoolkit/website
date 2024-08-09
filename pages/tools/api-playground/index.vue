<template>
  <div>
    <CardLinkList>
      <CardLink :to="localePath('/tools/api-playground/cached-search')">
        <template #title>
          {{ t('cache_search.title') }}
        </template>
        {{ t('cache_search.description') }}
        <template #leading>
          <Icon name="tabler:map-search" size="1.5em"
            class="text-gray-800 dark:text-neutral-200" />
        </template>
      </CardLink>
    </CardLinkList>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const { t } = useI18n({
  useScope: 'local',
})

useSeoMeta({
  title: t('seo.title'),
  description: t('seo.description'),
})
</script>

<i18n lang="json">
{
  "en": {
    "seo": {
      "title": "API Playground",
      "description": "Test the Seats.aero API endpoints and view raw response data in our interactive API Playground.Perfect for developers to experiment and integrate seamlessly.",
    },
    "cache_search": {
      "title": "Cached Search",
      "description": "Search for availability between specific airports within specific date ranges across all mileage programs."
    }
  },
  "pt": {
    "seo": {
      "title": "API Playground",
      "description": "Teste os endpoints da API Seats.aero e visualize dados de resposta brutos em nosso Playground de API interativo. Perfeito para desenvolvedores experimentarem e integrarem de forma perfeita."
    },
    "cache_search": {
      "title": "Cached Search",
      "description": "Pesquise disponibilidade entre aeroportos específicos dentro de intervalos de datas específicos em todos os programas de milhagem."
    }
  }
}
</i18n>
