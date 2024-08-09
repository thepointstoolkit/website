<template>
  <a :href="sponsorLink" :title="title" target="_blank">

    <div class="text-center ">
      <img class="size-24 mx-auto rounded-full bg-white"
        :src="avatar" :alt="title">
      <div class="mt-2 sm:mt-4">
        <h3 class="font-medium text-gray-800 dark:text-neutral-200">
          {{ flag }}
          {{ title }}
        </h3>
        <p class="text-sm text-gray-600 dark:text-neutral-400">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </a>
</template>
<script setup>
const config = useRuntimeConfig()

const props = defineProps({
  avatar: {
    type: String,
    required: true
  },
  flag: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  url: {
    type: String,
    default: "#"
  },
})
const sponsorLink = computed(() => props.url + "?utm_source=" + config.public.appName)
</script>
