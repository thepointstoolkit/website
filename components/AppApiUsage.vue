<template>
  <div class="mb-2 flex justify-between items-center flex-col gap-1">
    <p class="text-sm font-semibold text-gray-800 dark:text-white">
      API Usage
    </p>
    <div
      class="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
      role="progressbar"
      :aria-valuenow="rateLimitPercentage"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        class="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
        :style="{ width: rateLimitPercentage + '%' }"
      />
    </div>
    <span class="text-sm text-gray-800 dark:text-white">{{ rateLimitUsed }}/{{
      rateLimitLimit }}</span>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useSeatsAeroApiStore()
const { rateLimitLimit, rateLimitUsed, rateLimitPercentage } = storeToRefs(store)
</script>
