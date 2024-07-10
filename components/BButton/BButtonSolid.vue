<template>
  <BButton
    :class="[
      'border-transparent text-white   disabled:opacity-50',
      colorClasses,
    ]"
  >
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
      return 'bg-red-600 hover:bg-red-700'
    case 'warning':
      return 'bg-yellow-600 hover:bg-yellow-700'
    case 'primary':
    default:
      return 'bg-blue-600 hover:bg-blue-700'
  }
})
</script>
