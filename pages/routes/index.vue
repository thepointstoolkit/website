<template>
  <div>
    <CardLinkList>
      <CardLink :to="localePath('/routes/yearly-calendar')">
        <template #title>
          {{ t("yearly_calendar.title") }}
        </template>
        {{ t("yearly_calendar.description") }}
        <template #leading>
          <Icon
            name="tabler:calendar-month"
            size="1.5em"
            class="text-gray-800 dark:text-neutral-200"
          />
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
      "title": "Routes",
      "description": "Explore various visualizations for a specific route with our comprehensive set of tool."
    },
    "yearly_calendar": {
      "title": "Yearly Calendar",
      "description": "Discover a yearly calendar of availability for your desired route. Plan your travels with ease by viewing all available dates at a glance."
    }
  },
  "pt": {
    "seo": {
      "title": "Rotas",
      "description": "Explore várias visualizações para uma rota específica com nosso conjunto abrangente de ferramentas."
    },
    "yearly_calendar": {
      "title": "Calendário Anual",
      "description": "Descubra um calendário anual de disponibilidade para a rota desejada. Planeje suas viagens com facilidade visualizando todas as datas disponíveis de relance."
    }
  }
}
</i18n>
