<template>
  <div class="hs-tooltip [--trigger:click] lg:[--trigger:hover]">
    <div class="hs-tooltip-toggle">
      <div class="relative lg:size-10 lg:m-2 cursor-pointer z-0 select-none w-fit">
        <svg
          class="h-full w-full"
          viewBox="0 0 36 36"
          xmlns="http://www.w3.org/2000/svg"
        >
          <YearlyCalendarDayBar
            v-if="hasAnyAvailabilityOn('Y')"
            cabin="Y"
            :is-direct="hasDirectAvailabilityOn('Y')"
          />
          <YearlyCalendarDayBar
            v-if="hasAnyAvailabilityOn('W')"
            cabin="W"
            :is-direct="hasDirectAvailabilityOn('W')"
          />
          <YearlyCalendarDayBar
            v-if="hasAnyAvailabilityOn('J')"
            cabin="J"
            :is-direct="hasDirectAvailabilityOn('J')"
          />
          <YearlyCalendarDayBar
            v-if="hasAnyAvailabilityOn('F')"
            cabin="F"
            :is-direct="hasDirectAvailabilityOn('F')"
          />
        </svg>
        <div
          class="absolute start-0 end-0 top-0 bottom-0 flex items-center justify-center h-full"
        >
          <span
            class=" text-center text-xs md:text-md lg:text-lg font-bold
          text-gray-800 dark:text-white"
          >
            <slot />
          </span>
        </div>
      </div>
      <PopoverContent v-show="hasAvailabilities">
        <AvailabilityList
          :availabilities="availabilities"
          tool-id="YearlyCalendar"
        />
      </PopoverContent>
    </div>
  </div>
</template>

<script setup>
import itemsjs from 'itemsjs'
import { computed } from 'vue'

const props = defineProps({
  filters: {
    type: Object,
    default: () => {},
  },
})
const { response, searchConfiguration } = useSeatsAeroCachedSearchApi()
const itemsjsObj = computed(() => itemsjs(response.value, searchConfiguration))

const availabilities = computed(() => {
  return itemsjsObj.value.search({
    per_page: 10000,
    filters: props.filters,
  }).data.items
})

function hasAnyAvailabilityOn(cabin) {
  return availabilities.value?.filter(availability => availability[`${cabin}Available`]).length > 0
}
function hasDirectAvailabilityOn(cabin) {
  return availabilities.value?.filter(availability => availability[`${cabin}Direct`]).length > 0
}
const hasAvailabilities = computed(() => availabilities.value.length > 0)
</script>
