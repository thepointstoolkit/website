<template>
  <div class="flex gap-2">
    <Card class=" w-[360px] p-3">
      <CachedSearchForm @submit="submit" />
    </Card>
    <div
      class="bg-gray-50 w-full p-3 border rounded-xl overflow-scroll h-screen dark:bg-neutral-700/25 dark:border-neutral-700"
    >
      <pre>{{ response }}</pre>
    </div>
  </div>
</template>

<script setup>
import { useSeatsAeroCachedSearchApi } from '@/composables/useSeatsAeroCachedSearchApi'

const { response } = useSeatsAeroCachedSearchApi()
</script>
