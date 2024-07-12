<template>
  <a
    :href="seatsLink"
    class="hover:underline font-medium hover:font-bold"
    target="_blank"
    title="Check live availability on seats.aero"
  >
    <slot />
  </a>
</template>

<script setup>
import { computed } from 'vue'

const config = useRuntimeConfig()

const props = defineProps({
  cabin: {
    type: String,
  },
  date: {
    type: String,
  },
  origin: {
    type: String,
  },
  destination: {
    type: String,
  },
  source: {
    type: String,
  },
  utmMedium: {
    type: String,
  },
})
const seatsLink = computed(() => {
  const baseURL = 'https://seats.aero/search'
  const url = new URL(baseURL)
  const params = new URLSearchParams({
    applicable_cabin: props.cabin,
    origins: props.origin,
    destinations: props.destination,
    show_individual: true,
    sources: props.source,
    date: props.date,
    additional_days_num: 1,
    max_fees: 40000,
    utm_source: config.public.appName,
    utm_medium: props.utmMedium,
  })
  url.search = params.toString()
  return url.toString()
})
</script>
