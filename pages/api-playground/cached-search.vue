<template>
  <div class="flex gap-2">
    <Card class=" w-[360px] p-3">
      <CachedSearchForm />
    </Card>
    <div
      class="bg-gray-50 w-full p-3 border rounded-xl overflow-scroll h-screen dark:bg-neutral-700/25 dark:border-neutral-700"
    >
      <pre>{{ availabilities }}</pre>
    </div>
  </div>
</template>

<script setup>
import itemsjs from 'itemsjs'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'

const { response, searchConfiguration, searchFilters } = useSeatsAeroCachedSearchApi()
const itemsjsObj = computed(() => itemsjs(response.value, searchConfiguration))
const availabilities = computed(() => {
  return itemsjsObj.value.search({
    per_page: 10000,
    filters: searchFilters.value,
  }).data.items
})
useSeoMeta({
  title: 'Cached Search - Seats.aero Labs',
  description: 'Search for availability between specific airports within specific date ranges across all mileage programs.',
})
</script>
