<template>
  <div v-show="hasResults">
    <SectionDivider class="my-3">
      Filters
    </SectionDivider>
    <div class="row">
      <div
        v-for="facet in searchableResponse.data.aggregations"
        :key="facet"
      >
        <h5 class="text-lg font-bold text-gray-800 dark:text-white my-2">
          {{ $t(`filters.${facet.title}`) }}
        </h5>
        <template
          v-for="bucket in facet.buckets"
          :key="bucket.key"
        >
          <FormCheckbox
            :id="bucket.key"
            v-model="filters[facet.name]"
            :label="`${bucket.key} (${bucket.doc_count})`"
            :value="bucket.key"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import itemsjs from 'itemsjs'
import { computed, watch } from 'vue'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'

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
</script>
