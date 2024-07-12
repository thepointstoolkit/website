<template>
  <div>
    <CardLinkList>
      <CardLink to="/api-playground/cached-search">
        <template #title>
          Cached Search
        </template>
        Search for availability between specific airports within
        specific date ranges across all mileage programs.
        <template #leading>
          <Icon
            name="tabler:map-search"
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
  title: 'API Playground - Seats.aero Labs',
  description: 'Test the Seats.aero API endpoints and view raw response data in our interactive API Playground.Perfect for developers to experiment and integrate seamlessly.',
})
</script>
