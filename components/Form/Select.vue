<template>
  <div class="w-max-full space-y-3">
    <label
      v-if="label"
      class="block text-sm mb-2 dark:text-white"
    >
      {{ label }}
    </label>
    <select
      autocomplete="off"
      class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      :value="modelValue"
      @change="onChange"
    >
      <option
        v-if="placeholder"
        selected
        value=""
        disabled
      >
        {{ placeholder }}
      </option>

      <slot />
    </select>
  </div>
</template>

<script setup>
import { useAttrs } from 'vue'

useAttrs()
defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  label: {
    type: [String],
  },
  placeholder: {
    type: [String],
  },
})

const emits = defineEmits(['update:modelValue'])

const onChange = (event) => {
  emits('update:modelValue', event.target.value)
}
</script>
