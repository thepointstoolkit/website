<template>
  <CardLinkList>
    <CardLink :to="localePath('/routes')">
      <template #title>
        {{ t("routes.title") }}
      </template>
      {{ t("routes.description") }}
      <template #leading>
        <Icon
          name="tabler:route-2"
          size="1.5em"
          class="text-gray-800 dark:text-neutral-200"
        />
      </template>
    </CardLink>

    <CardLink :to="localePath('/api-playground')">
      <template #title>
        {{ t("api_playground.title") }}
      </template>
      {{ t("api_playground.description") }}
      <template #leading>
        <Icon
          name="tabler:code"
          size="1.5em"
          class="text-gray-800 dark:text-neutral-200"
        />
      </template>
    </CardLink>
  </CardLinkList>
</template>

<script setup lang="ts">
const { t } = useI18n({
  useScope: 'local',
})
const localePath = useLocalePath()
</script>

<i18n lang="json">
{
  "en": {
    "routes": {
      "title": "Routes",
      "description": "Explore various visualizations for a specific route with our comprehensive set of tools. Gain insights and plan your travel efficiently."
    },
    "api_playground": {
      "title": "API Playground",
      "description": "Test the Seats.aero API endpoints and view raw response data in ourinteractive API Playground. Perfect for developers to experiment and integrate seamlessly."
    }
  },
  "pt": {
    "routes": {
      "title": "Rotas",
      "description": "Explore várias visualizações para uma rota específica com nosso conjunto abrangente de ferramentas. Obtenha insights e planeje sua viagem de forma eficiente."
    },
    "api_playground": {
      "title": "API Playground",
      "description": "Teste os endpoints da API do Seats.aero e visualize a resposta em nosso API Playground interativo. Perfeito para desenvolvedores experimentarem e integrarem sem problemas."
    }
  }
}
</i18n>
