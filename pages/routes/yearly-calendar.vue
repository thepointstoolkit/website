<template>
  <div>
    <NuxtLayout name="default">
      <ApiKeyWarning />
      <template #sidebar>
        <CachedSearchForm v-model="formData" @submit="handleSubmit"
          :allowedFilters="[
            'Source',
            'Cabins',
            'OriginAirport',
            'DestinationAirport',
            'OriginRegion',
            'DestinationRegion',
            ]" />
      </template>
      <BButtonSolid data-hs-overlay="#app-sidebar" v-if="showFilterInfo"
        class="fixed bottom-4 right-4 left-4 text-lg justify-center items-center z-10 p-4 rounded shadow-lg md:hidden">
        <Icon name="tabler:filter" /> Filter
      </BButtonSolid>
      <div class="flex">
        <YearlyCalendar :start-date="formData?.startDate"
          :end-date="formData?.endDate" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const formData = ref({})
const showFilterInfo = ref(false)
const { t } = useI18n({
  useScope: 'local',
})
definePageMeta({
  layout: false,
})
useSeoMeta({
  title: t('seo.title'),
  description: t('seo.description'),
})

function handleSubmit() {
  showFilterInfo.value = true;
  HSOverlay.close('#app-sidebar');
}
</script>

<i18n lang="json">{
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
