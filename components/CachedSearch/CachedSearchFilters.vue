<template>
  <div v-show="hasResults">
    <SectionDivider class="my-3">
      {{ $t("strings.filters") }}
    </SectionDivider>
    <div class="row">
      <template
        v-for="filter in allowedFilters"
        :key="`filter-${filter}`"
      >
        <FacetFilter
          :name="filter"
          :title="filter"
        >
          <template
            v-for="bucket in searchableResponse.data.aggregations[filter].buckets"
            :key="bucket.key"
          >
            <FormCheckbox
              :id="`${filter}_${bucket.key}`"
              v-model="filters[filter]"
              :label="`${bucket.key} (${bucket.doc_count})`"
              :value="bucket.key"
            />
          </template>
        </FacetFilter>
      </template>
    </div>
  </div>
</template>

<script setup>
import itemsjs from 'itemsjs'
import { computed, onUpdated, watch } from 'vue'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'

defineProps({
  allowedFilters: {
    type: Array,
    default: () => [
      'Source',
      'HasDirectFlight',
      'Cabins',
      'OriginAirport',
      'DestinationAirport',
      'OriginRegion',
      'DestinationRegion',
      'Month',
      'Date',
    ],
  },
})

const { searchFilters, response, searchConfiguration } = useSeatsAeroCachedSearchApi()
onMounted(() => resetFilters())

const filters = reactive({})

const searchableResponse = computed(() => itemsjs(response.value, searchConfiguration).search({
  filters: searchFilters.value,
}))

const hasResults = computed(() => (response?.value?.length ?? 0) > 0)

function resetFilters() {
  Object.keys(searchConfiguration.aggregations).map(function (v) {
    filters[v] = []
  })
}

watch(filters, async (newValue) => {
  searchFilters.value = JSON.parse(JSON.stringify(newValue))
})
onUpdated(() => {
  // new HSCollapse(document.querySelector('#collapse'))
})
</script>
