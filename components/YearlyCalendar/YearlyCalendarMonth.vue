<template>
  <div
    class="flex flex-col bg-white border shadow-lg rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700"
  >
    <div class="p-1 md:p-2 lg:p-3">
      <div class="flex flex-col w-full">
        <div class="flex-initial">
          <div
            class=" text-center font-medium  text-gray-800 dark:text-neutral-200  pb-1.5"
          >
            {{ monthLabel }}
          </div>
          <div class="grid grid-cols-7 pb-1.5 gap-1">
            <span
              v-for="dayName in dayNames"
              :key="'day-name-' + dayName"
              class=" lg:size-10 lg:m-2 block text-center text-sm text-gray-500 dark:text-neutral-400"
            >
              {{ $t('days.letter.'+dayName) }}
            </span>
          </div>
        </div>
        <div class="flex-initial">
          <div class="grid grid-cols-7 gap-1">
            <div
              v-for="_, i in startIndex"
              :key="'disabled-' + i"
              class="size-6 lg:size-10 lg:m-2 "
            />
            <template
              v-for="_, i in days"
              :key="'day-' + month + i + filtersAppliedKey"
            >
              <YearlyCalendarDay :filters="getFiltersFor(i + 1, month, year)">
                {{ i + 1 }}
              </YearlyCalendarDay>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'

const { searchFilters } = useSeatsAeroCachedSearchApi()

const props = defineProps({
  month: {
    type: Number,
  },
  year: {
    type: Number,
  },
  days: {
    type: Number,
  },
  weeks: {
    type: Number,
  },
  startIndex: {
    type: Number,
  },
  yearMonth: {
    type: String,
  },
  monthLabel: {
    type: String,
  },
  filters: {
    type: Object,
    default: () => { },
  },
})
const dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

const filtersAppliedKey = ref(0)

function getFiltersFor(day, month, year) {
  const date = new Date(year, month, day)
  const formattedDate = format(date, 'yyyy-MM-dd')
  return {
    ...searchFilters.value,
    ...props.filters,
    Date: [formattedDate],
  }
}

watchEffect(searchFilters, () => {
  filtersAppliedKey.value += 1
  window.HSStaticMethods.autoInit()
})
</script>
