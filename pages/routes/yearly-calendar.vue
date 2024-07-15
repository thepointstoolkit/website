<template>
  <div>
    <ApiKeyWarning />
    <div class="flex flex-col sm:flex-row gap-5">
      <CachedSearchForm v-model="formData" />
      <div>
        <YearlyCalendar
          :start-date="formData?.startDate"
          :end-date="formData?.endDate"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = ref({})
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
      "title": "Yearly Calendar",
      "description": "Discover a yearly calendar of availability for your desired route. Plan your travels with ease by viewing all available dates at a glance.",
    }
  },
  "pt": {
    "seo": {
      "title": "Calendário Anual",
      "description": "Descubra um calendário anual de disponibilidade para a rota desejada. Planeje suas viagens com facilidade visualizando todas as datas disponíveis de uma vez."
    }
  }
}
</i18n>
