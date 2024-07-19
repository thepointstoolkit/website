<template>
  <g class="origin-center transform" :class="[rotationClass]">
    <template v-if="isDirect">
      <circle cx="18" cy="18" r="15" fill="none"
        class="stroke-current size-6 stroke-4 md:stroke-5 lg:stroke-6" :class="[colorClasses]"
        stroke-dasharray="100" stroke-dashoffset="75" />
    </template>
    <template v-else>
      <circle cx="18" cy="18" r="13" fill="none"
        class="stroke-current stroke-1 md:stroke-2" :class="[colorClasses]"
        stroke-dasharray="100" stroke-dashoffset="75" />
      <circle cx="18" cy="18" r="17" fill="none"
        class="stroke-current stroke-1 md:stroke-2" :class="[colorClasses]"
        stroke-dasharray="100" stroke-dashoffset="70" />
    </template>
  </g>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ cabin: { type: String, required: true }, isDirect: { type: Boolean, required: true } })
const colorClasses = computed(() => {
  switch (props.cabin) {
    case 'Y':
      return 'text-gray-600 dark:text-gray-500'
    case 'W':
      return 'text-blue-600 dark:text-blue-500'
    case 'J':
      return 'text-green-600 dark:text-green-500'
    case 'F':
      return 'text-red-600 dark:text-red-500'
    default:
      return ''
  }
})
const rotationClass = computed(() => {
  switch (props.cabin) {
    case 'Y':
      return '-rotate-225'
    case 'W':
      return '-rotate-135'
    case 'J':
      return '-rotate-45'
    case 'F':
      return 'rotate-45'
    default:
      return ''
  }
})
</script>
