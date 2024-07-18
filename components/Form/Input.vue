<template>
  <div class="w-max-full">
    <div class="flex gap-2 items-center">
      <label
        v-if="label && !floatingLabel"
        class="block text-sm mb-2 dark:text-white"
      >
        {{ label }}
      </label>
      <FormHelp v-if="help">
        {{ help }}
      </FormHelp>
    </div>
    <div class="relative">
      <input
        class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        :class="[
          floatingLabelClasses,
          validationClasses,
        ]"
        @input="updateValue($event.target.value)"
      >

      <label
        v-if="label && floatingLabel"
        :for="id"
        :class="[labelClasses]"
        class="absolute top-0 start-0 p-3 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
      peer-focus:scale-90
      peer-focus:translate-x-0.5
      peer-focus:-translate-y-1.5
      peer-focus:text-gray-500 dark:peer-focus:text-neutral-500
      peer-[:not(:placeholder-shown)]:scale-90
      peer-[:not(:placeholder-shown)]:translate-x-0.5
      peer-[:not(:placeholder-shown)]:-translate-y-1.5
      peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500"
      >
        {{ label }}
      </label>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { useAttrs } from 'vue'

useAttrs()
const modelValue = defineModel()
const props = defineProps({
  label: {
    type: String,
  },
  labelClasses: {
    type: String,
  },
  floatingLabel: {
    type: Boolean,
  },
  type: {
    type: String,
  },
  id: {
    type: String,
  },
  class: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  validate: {
    type: Boolean,
  },
  isValid: {
    type: Boolean,
  },
  required: {
    type: Boolean,
  },
  help: {
    type: String,
  },
})
const emits = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emits('update:modelValue', value)
}

const floatingLabelClasses = computed(() => {
  if (!props.floatingLabel) {
    return ''
  }
  return 'peer placeholder:text-transparent focus:pt-6 focus:pb-2 [&:not(:placeholder-shown)]:pt-6 [&:not(:placeholder-shown)]:pb-2 autofill:pt-6 autofill:pb-2'
})
const validationClasses = computed(() => {
  const { isValid, validate } = props
  if (!validate) {
    return ''
  }

  if (isValid == true) {
    return 'border-teal-500 focus:border-teal-500 focus:ring-teal-500'
  }
  else if (isValid == false) {
    return 'border-red-500 focus:border-red-500 focus:ring-red-500'
  }
  return ''
})
</script>
