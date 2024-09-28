<template>
  <a v-show="deepLink"
    class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800 relative"
    :href="deepLink" target="_blank">
    <div class="py-2 px-4">
      <div class="flex justify-between items-center gap-x-3">
        <div class="">
          <div class="flex items-center gap-x-3">
            <img class="size-16 mx-auto object-contain"
              :src="loyaltyProgramInfo.logo" alt="Avatar">
            <div class="">
              <h3
                class="group-hover:text-blue-600 font-semibold flex text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 items-center gap-1">
                {{ loyaltyProgramInfo.name }}
                <Icon name="tabler:lock" v-if="loyaltyProgramInfo.authRequired"/>
              </h3>

              <p class="text-gray-500 text-xs">{{ loyaltyProgramInfo.alliance }}
              </p>
            </div>
          </div>
        </div>

        <div>
          <svg class="shrink-0 size-5 text-gray-800 dark:text-neutral-200"
            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { useLoyaltyProgramDeepLink } from '@/composables/useLoyaltyProgramDeepLink';

const { generateDeepLink } = useLoyaltyProgramDeepLink();

import { deepLinks } from '@/data'

const props = defineProps({
  cabin: {
    type: String,
  },
  departure: {
    type: String,
  },
  return: {
    type: String,
  },
  origin: {
    type: String,
  },
  destination: {
    type: String,
  },
  program: {
    type: String,
  },
})
const loyaltyProgramInfo = computed(() => {
  return deepLinks[props.program] ?? {}
})

const deepLink = computed(() => {
  if (!props.origin && !props.destination && !props.departure) {
    return ""
  }

  return generateDeepLink(props.program, {
    origin: props.origin,
    destination: props.destination,
    departureDate: props.departure,
    returnDate: props.return,
    cabin: props.cabin,
  })

});
</script>
