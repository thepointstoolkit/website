<template>
  <div>
    <CardLinkList>
      <CardLink to="/routes/yearly-calendar">
        <template #title>
          Yearly Calendar
        </template>
        Discover a yearly calendar of availability for your desired route. Plan
        your travels with ease by viewing all available dates at a glance.
        <template #leading>
          <Icon
            name="tabler:calendar-month"
            size="1.5em"
            class="text-gray-800 dark:text-neutral-200"
          />
        </template>
      </CardLink>
    </CardLinkList>
  </div>
</template>
<script setup lang="ts">
useSeoMeta({
  title: 'Routes - Seats.aero Labs',
  description: 'Explore various visualizations for a specific route with our comprehensive set of tools. Gain insights and plan your travel efficiently.'
})
</script>
