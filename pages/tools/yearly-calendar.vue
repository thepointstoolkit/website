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
      <ApiKeyWarning />
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
              <option
                :label="$t('cached_search_form.strings.all_options')"
                value=""
              />
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
              <option
                :label="$t('cached_search_form.strings.all_options')"
                value=""
              />
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
import { multicodeAirports } from '@/data'

const { searchFilters, response, searchConfiguration, finished, isLoading } = useSeatsAeroCachedSearchApi()
const searchableResponse = computed(() => itemsjs(response.value, searchConfiguration).search({
  filters: searchFilters.value,
}))

const formData = ref({})
const inboundFilters = ref({ OriginAirport: [], DestinationAirport: [] })
const outboundFilters = ref({ OriginAirport: [], DestinationAirport: [] })
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
  const multiCodeOrigin = multicodeAirports.includes(formData.value.origin.toUpperCase())
  const multiCodeDestination = multicodeAirports.includes(formData.value.destination.toUpperCase())

  inboundFilters.value.OriginAirport[0] = multiCodeOrigin ? '' : formData.value.origin.toUpperCase()
  outboundFilters.value.OriginAirport[0] = multiCodeDestination ? '' : formData.value.destination.toUpperCase()
  HSOverlay.close('#app-sidebar')
}
const isRoundTrip = computed(() => formData.value.searchType == 'round_trip')
const outboundAirports = computed(() => searchableResponse?.value.data.aggregations.DestinationAirport.buckets ?? [])
const inboundAirports = computed(() => searchableResponse?.value.data.aggregations.OriginAirport.buckets ?? [])

watch(
  () => inboundFilters.value.OriginAirport,
  (newValue) => {
    if (newValue[0] != '') {
      outboundFilters.value.DestinationAirport[0] = newValue[0]
    }
    else {
      outboundFilters.value.DestinationAirport = []
    }
  },
  { deep: true }, // Ensure deep watching
)

watch(
  () => outboundFilters.value.OriginAirport,
  (newValue) => {
    if (newValue[0] != '') {
      inboundFilters.value.DestinationAirport[0] = newValue[0]
    }
    else {
      inboundFilters.value.DestinationAirport = []
    }
  },
  { deep: true }, // Ensure deep watching
)
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
