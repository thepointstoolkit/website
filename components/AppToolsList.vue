<template>

  <SectionTitle :title="t('section.title')" :subtitle="t('section.subtitle')" />
  <CardLinkList>
    <CardLink :to="localePath('/tools/routes')">
      <template #title>
        {{ t("routes.title") }}
      </template>
      {{ t("routes.description") }}
      <template #leading>
        <Icon name="tabler:route-2" size="1.5em"
          class="text-gray-800 dark:text-neutral-200" />
      </template>
    </CardLink>

    <CardLink>
      <template #title>
        {{ t("trip_planner.title") }}
      </template>
      {{ t("trip_planner.description") }}
      <template #leading>
        <Icon name="tabler:transform-point-top-right" size="1.5em"
          class="text-gray-800 dark:text-neutral-200" />
      </template>
      <CardLinkBadge>{{ t("strings.soon") }}</CardLinkBadge>
    </CardLink>

    <CardLink>
      <template #title>
        {{ t("deep_link.title") }}
      </template>
      {{ t("deep_link.description") }}
      <template #leading>
        <Icon name="tabler:link" size="1.5em"
          class="text-gray-800 dark:text-neutral-200" />
      </template>
      <CardLinkBadge>{{ t("strings.soon") }}</CardLinkBadge>
    </CardLink>
    <CardLink>
      <template #title>
        {{ t("calculators.title") }}
      </template>
      {{ t("calculators.description") }}
      <template #leading>
        <Icon name="tabler:calculator" size="1.5em"
          class="text-gray-800 dark:text-neutral-200" />
      </template>
      <CardLinkBadge>{{ t("strings.soon") }}</CardLinkBadge>
    </CardLink>


    <CardLink :to="localePath('/tools/api-playground')">
      <template #title>
        {{ t("api_playground.title") }}
      </template>
      {{ t("api_playground.description") }}
      <template #leading>
        <Icon name="tabler:code" size="1.5em"
          class="text-gray-800 dark:text-neutral-200" />
      </template>
    </CardLink>
  </CardLinkList>

</template>

<script setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="json">{
  "en": {
    "section": {
      "title": "Our Tools",
      "subtitle": "Whether you're looking to maximize your points, find the best flight deals, or plan your next trip, our tools are here to help you every step of the way."
    },
    "routes": {
      "title": "Routes Explorer",
      "description": "Explore various visualizations for a specific route with our comprehensive set of tools. Gain insights and plan your travel efficiently."
    },
    "api_playground": {
      "title": "Developer Tools",
      "description": "Test the Seats.aero API endpoints and view raw response data in ourinteractive API Playground. Perfect for developers to experiment and integrate seamlessly."
    },
    "trip_planner": {
      "title": "Trip Planner",
      "description": "Effortlessly visualize availability for multiple routes simultaneously simplifing the process for your trip planning."
    },
    "deep_link": {
      "title": "Deep Link",
      "description": "Set your search parameters once and get instant deep links to search results across multiple loyalty program websites. "
    },
    "calculators": {
      "title": "Calculators",
      "description": "Explore our calculators that help with all the math in the points and miles world, making it easier to maximize your travel rewards."
    }
  },
  "pt": {
    "section": {
      "title": "Nossas ferramentas",
      "subtitle": "Se você deseja maximizar seus pontos, encontrar as melhores disponibilidades de voos ou planejar sua próxima viagem, nossas ferramentas estão aqui para ajudá-lo em cada etapa do processo."
    },
    "routes": {
      "title": "Explorar Rotas",
      "description": "Explore várias visualizações para uma rota específica com nosso conjunto de ferramentas. Obtenha insights e planeje sua viagem de forma eficiente."
    },
    "api_playground": {
      "title": "Desenvolvedor",
      "description": "Teste os endpoints da API do Seats.aero e visualize a resposta em nosso playground interativo."
    },"trip_planner": {
      "title": "Planejador de Viagens",
      "description": "Visualize facilmente a disponibilidade de múltiplas rotas simultaneamente, simplificando o processo de planejamento da sua viagem."
    },
    "deep_link": {
      "title": "Link Direto",
      "description": "Defina seus parâmetros de pesquisa uma vez e obtenha links diretos instantâneos para os resultados da pesquisa em vários programas de fidelidade."
    },
     "calculators": {
      "title": "Calculadoras",
      "description": "Explore nossas calculadoras que facilitam todos os cálculos no mundo dos pontos e milhas, ajudando você a maximizar suas recompensas de viagem."
    }
  }
}
</i18n>
