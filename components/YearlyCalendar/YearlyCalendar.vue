<template>
  <div>
    <div
      v-if="hasResponse"
      class="flex flex-col"
    >
      <template
        v-for="calendarMonth in calendarMonths"
        :key="'calendarMonth-' + calendarMonth.index"
      >
        <YearlyCalendarMonth
          :month="calendarMonth.month"
          :year="calendarMonth.year"
          :days="calendarMonth.days"
          :weeks="calendarMonth.weeks"
          :start-index="calendarMonth.startIndex"
          :year-month="calendarMonth.yearMonth"
          :month-label="calendarMonth.monthLabel"
        />
        <div
          class="relative h-20 last:after:hidden after:absolute after:top-0 after:bottom-0 after:start-[50%] after:w-px after:bg-gray-300 dark:after:bg-neutral-700"
        />
      </template>
    </div>
  </div>
</template>

<script setup>
import { format } from 'date-fns'
import { computed } from 'vue'
import { useCalendarData } from '@/composables/useCalendarData'
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'

const { createCalendar } = useCalendarData()
const props = defineProps({
  startDate: {
    type: String,
  },
  endDate: {
    type: String,
  },
})

const calendarMonths = computed(() => {
  const today = format(new Date(), 'yyyy-MM-dd')
  const { startDate, endDate } = props
  return createCalendar(startDate != '' ? startDate : today, endDate != '' ? endDate : '')
})
const { response } = useSeatsAeroCachedSearchApi()
const hasResponse = computed(() => response.value.length > 0)
</script>
