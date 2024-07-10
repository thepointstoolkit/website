<template>
  <span
    class="inline-flex items-center gap-x-1.5 py-1 px-1.5 rounded-full text-xs font-medium"
    :class="[colorClasses]"
  >
    <template v-if="isAvailable">
      {{ formattedCost }} <template v-if="seats > 0"> ({{ seats }})</template>
    </template>
    <template v-else>
      Not Available
    </template>
  </span>
</template>

<script setup>
const props = defineProps({
  isAvailable: {
    type: Boolean,
  },
  isDirect: {
    type: Boolean,
  },
  cost: {
    type: [Number, String],
  },
  seats: {
    type: [Number, String],
  },
})

const colorClasses = computed(() => {
  if (!props.isAvailable) {
    return 'bg-gray-100 text-gray-800'
  }
  else if (props.isDirect) {
    return 'bg-green-100 text-green-800'
  }
  else {
    return 'bg-blue-100 text-blue-800'
  }
})
const formattedCost = computed(() => parseInt(props.cost).toLocaleString())
</script>
