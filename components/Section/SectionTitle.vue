<template>
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
      {{title}}</h2>
    <p class="mt-1 text-gray-600 dark:text-neutral-400">
      {{subtitle}}
    </p>
  </div>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  }
})
</script>
