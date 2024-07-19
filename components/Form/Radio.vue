<template>
  <div class="flex">
    <input :id="id" v-model="model" type="radio"
      class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
      :value="value">
    <label :for="id" class="text-sm text-gray-500 ms-3 dark:text-neutral-400">{{
      label
      }}</label>
  </div>
</template>

<script setup>
import { useAttrs } from 'vue'

useAttrs()
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  modelValue: { type: [Array, Boolean,String] },
  value: { type: [Boolean, String] },
})

const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
