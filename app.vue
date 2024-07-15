<template>
  <NuxtLayout>
    <NuxtLoadingIndicator :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const config = useRuntimeConfig()
const appName = config.public.appName
useHead({
  titleTemplate: (titleChunk: string) => {
    return titleChunk ? `${titleChunk} - ${appName}` : `${appName}`
  },
})

useSeoMeta({
  description: 'Experimental data visualization using the Seats.aero API. Transforms raw flight data into interactive, insightful visualizations, offering a fresh perspective on airline seat availability.',
})
</script>
