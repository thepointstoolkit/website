<template>
  <div class="flex flex-row gap-5">
    <Card class=" w-[360px] p-3">
      <CachedSearchForm v-model="formData" />
    </Card>
    <div>
      <YearlyCalendar
        :start-date="formData?.startDate"
        :end-date="formData?.endDate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const formData = ref({})

useSeoMeta({
  title: 'Yearly Calendar - Seats.aero Labs',
  description: 'Discover a yearly calendar of availability for your desired route. Plan your travels with ease by viewing all available dates at a glance.'
})
</script>
