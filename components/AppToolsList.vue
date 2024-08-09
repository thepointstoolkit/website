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
      "subtitle": "Whether you want to maximize your points and miles, find the best flight availabilities, or plan your next trip, our tools are here to assist you at every step of the process."
    },
    "routes": {
      "title": "Explore Routes",
      "description": "Easily find the availability for route you want. We provide yearly availabilities, various filters, multiple visualization options, and much more."
    },
    "api_playground": {
      "title": "Developer",
      "description": "Test the Seats.aero API endpoints and view the response in our interactive playground."
    },
    "trip_planner": {
      "title": "Trip Planner",
      "description": "Plan the best route for your trip by visualizing multiple segments simultaneously. Find connections and have all your options in one place."
    },
    "deep_link": {
      "title": "Direct Link",
      "description": "Enter the flight details you want, and our tool creates direct links for all loyalty programs. Quickly compare options and find the best deal!"
    },
    "calculators": {
      "title": "Calculators",
      "description": "Find out whether it's better to use your miles or pay in cash, choose between bonus purchases or cashback. Everything you need to maximize your points."
    }
  },
    "pt": {
      "section": {
        "title": "Nossas ferramentas",
        "subtitle": "Se você deseja maximizar seus pontos e milhas, encontrar as melhores disponibilidades de voos ou planejar sua próxima viagem, nossas ferramentas estão aqui para ajudá-lo em cada etapa do processo."
      },
      "routes": {
        "title": "Explorar Rotas",
        "description": "Ache de forma fácil a rota que você deseja. Nós fornecemos disponibilidades anuais, diversos filtros, várias formas de visualização e muito mais."
      },
      "api_playground": {
        "title": "Desenvolvedor",
        "description": "Teste os endpoints da API do Seats.aero e visualize a resposta em nosso playground interativo."
      },
      "trip_planner": {
        "title": "Planejador de Viagens",
        "description": "Planeja a melhor rota para sua viagem, visualizando múltiplos trechos simultaneamente. Encontre conexões e tenha todas as opções em um só lugar."
      },
      "deep_link": {
        "title": "Link Direto",
        "description": "Digite as informações da passagem que deseja, e nossa ferramenta cria links diretos para todos os programas de fidelidade. Assim, você pode comparar rapidamente as opções e encontrar a melhor opção!"
      },
      "calculators": {
        "title": "Calculadoras",
        "description": "Descubra se é melhorutilizar suas milhas ou pagar em dinheiro, escolher entre compra bonificada ou cashback. Tudo o que você precisa para maximar seus pontos."
      }
    }
  }
</i18n>
