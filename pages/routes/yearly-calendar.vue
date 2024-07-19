<template>
  <div>
    <NuxtLayout name="default">
      <template #sidebar>
        <CachedSearchForm
          v-model="formData"
          :allowed-filters="[
            'Source',
            'Cabins',
            'OriginAirport',
            'DestinationAirport',
            'OriginRegion',
            'DestinationRegion',
          ]"
          @submit="handleSubmit"
        />
      </template>

      <BButtonSolid
        v-if="showFilterInfo"
        data-hs-overlay="#app-sidebar"
        class="fixed bottom-4 right-4 left-4 text-lg justify-center items-center z-10 p-4 rounded shadow-lg md:hidden"
      >
        <Icon name="tabler:filter" /> {{ $t("buttons.filter_results") }}
      </BButtonSolid>
      <div
        v-if="finished"
        class="flex gap-2 justify-between"
      >
        <template v-if="!isRoundTrip">
          <YearlyCalendar
            :start-date="formData?.startDate"
            :end-date="formData?.endDate"
          />
        </template>
        <template v-else>
          <div>
            <h4
              class="text-lg  text-gray-800 dark:text-white flex align-middle items-center my-2"
            >
              <Icon
                name="tabler:plane-departure"
                class="size-6 me-2 text-gray-700"
              />
              <span class="font-bold">{{
                $t('cached_search_form.labels.outbound') }}</span>
            </h4>
            <FormSelect
              v-model="inboundFilters.OriginAirport[0]"
              class="mb-3"
            >
              <template
                v-for="bucket in inboundAirports"
                :key="bucket.key"
              >
                <option
                  :label="`${bucket.key}`"
                  :value="bucket.key"
                />
              </template>
            </FormSelect>
            <YearlyCalendar
              :start-date="formData?.startDate"
              :end-date="formData?.endDate"
              :filters="inboundFilters"
            />
          </div>
          <div>
            <h4
              class="text-lg  text-gray-800 dark:text-white flex align-middle items-center my-2"
            >
              <Icon
                name="tabler:plane-arrival"
                class="size-6 me-2 text-gray-700"
              />
              <span class="font-bold">{{ $t('cached_search_form.labels.inbound')
              }}</span>
            </h4>
            <FormSelect
              v-model="outboundFilters.OriginAirport[0]"
              class="mb-3"
            >
              <template
                v-for="bucket in outboundAirports"
                :key="bucket.key"
              >
                <option
                  :label="`${bucket.key}`"
                  :value="bucket.key"
                />
              </template>
            </FormSelect>
            <YearlyCalendar
              :start-date="formData?.startDate"
              :end-date="formData?.endDate"
              :filters="outboundFilters"
            />
          </div>
        </template>
      </div>
      <div v-else-if="isLoading">
        <AppLoadingMessage />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import itemsjs from 'itemsjs'
import { computed } from 'vue'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'

const { searchFilters, response, searchConfiguration, finished, isLoading } = useSeatsAeroCachedSearchApi()
const searchableResponse = computed(() => itemsjs(response.value, searchConfiguration).search({
  filters: searchFilters.value,
}))

const formData = ref({})
const inboundFilters = ref({ OriginAirport: [] })
const outboundFilters = ref({ OriginAirport: [] })
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
  showFilterInfo.value = true
  inboundFilters.value.OriginAirport[0] = formData.value.origin.toUpperCase()
  outboundFilters.value.OriginAirport[0] = formData.value.destination.toUpperCase()
  HSOverlay.close('#app-sidebar')
}
const isRoundTrip = computed(() => formData.value.searchType == 'round_trip')
const outboundAirports = computed(() => searchableResponse?.value.data.aggregations.DestinationAirport.buckets ?? [])
const inboundAirports = computed(() => searchableResponse?.value.data.aggregations.OriginAirport.buckets ?? [])
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
