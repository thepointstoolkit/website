<template>
  <BButton :class="['border-gray-200 text-gray-500  disabled:opacity-50  dark:border-neutral-700 dark:text-neutral-400', colorClasses]">
    <slot />
  </BButton>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
})

const colorClasses = computed(() => {
  switch (props.variant) {
    case 'danger':
      return 'hover:border-red-600 hover:text-red-600 dark:hover:text-red-500 dark:hover:border-red-600'
    case 'warning':
      return 'hover:border-yellow-600 hover:text-yellow-600 dark:hover:text-yellow-500 dark:hover:border-yellow-600'
    case 'primary':
    default:
      return 'hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-500 dark:hover:border-blue-600'
  }
})
</script>
