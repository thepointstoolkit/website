<template>
  <div>
    <ApiKeyWarning />
    <div class="flex flex-col sm:flex-row gap-5">
      <CachedSearchForm v-model="formData" />
      <div
        class="bg-gray-50 w-full p-3 border rounded-xl overflow-scroll h-screen dark:bg-neutral-700/25 dark:border-neutral-700"
      >
        <pre>{{ availabilities }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import itemsjs from 'itemsjs'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'

const { t } = useI18n({
  useScope: 'local',
})

useSeoMeta({
  title: t('seo.title'),
  description: t('seo.description'),
})

const { response, searchConfiguration, searchFilters } = useSeatsAeroCachedSearchApi()
const itemsjsObj = computed(() => itemsjs(response.value, searchConfiguration))
const availabilities = computed(() => {
  return itemsjsObj.value.search({
    per_page: 10000,
    filters: searchFilters.value,
  }).data.items
})
</script>

<i18n lang="json">
{
  "en": {
    "seo": {
      "title": "Cached Search",
      "description": "Search for availability between specific airports within specific date ranges across all mileage programs.",
    }
  },
  "pt": {
    "seo": {
      "title": "Busca em Cache",
      "description": "Pesquise disponibilidade entre aeroportos específicos dentro de intervalos de datas específicos em todos os programas de milhagem."
    }
  }
}
</i18n>
