<template>
  <div :id="id"
    class="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 border text-sm rounded-lg p-4"
    :class="[colorClasses]" role="alert">
    <div class="flex">
      <div class="ms-4">
        <h3 class="text-sm font-semibold">
          {{ title }}
        </h3>
        <div v-if="$slots.default" class="mt-2 text-sm" :class="[bodyClasses]">
          <slot />
        </div>
      </div>
      <div class="ps-3 ms-auto" v-if="dismiss">
        <div class="-mx-1.5 -my-1.5">
          <button type="button"
            class="inline-flex rounded-lg p-1.5  focus:outline-none focus:ring-2 focus:ring-offset-2"
            :class="[dismissClasses]"
            :data-hs-remove-element="`#${id}`">
            <span class="sr-only">Dismiss</span>
            <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean,
      default: true,
    },
    dismiss: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'info',
    },
  },
  computed: {
    colorClasses() {
      switch (this.type) {
        case 'info':
          return 'bg-blue-50 border-blue-200 text-blue-800  dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500'
        case 'error':
          return 'bg-red-50 border-red-200 text-red-800  dark:bg-red-800/10 dark:border-red-900 dark:text-red-500'
        case 'warning':
          return 'bg-yellow-50 border-yellow-200 text-yellow-800  dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500'
        default:
          return ''
      }
    },
    bodyClasses() {
      switch (this.type) {
        case 'info':
          return 'text-blue-700 dark:text-blue-400'
        case 'error':
          return 'text-red-700 dark:text-red-400'
        case 'warning':
          return 'text-yellow-700 dark:text-yellow-400'
        default:
          return ''
      }
    },
    dismissClasses() {
      switch (this.type) {
        case 'info':
          return 'bg-blue-50 text-blue-500 hover:bg-blue-100 focus:ring-offset-blue-50 focus:ring-blue-600 dark:bg-transparent dark:hover:bg-blue-800/50 dark:text-blue-600'
        case 'error':
          return 'bg-red-50 text-red-500 hover:bg-red-100 focus:ring-offset-red-50 focus:ring-red-600 dark:bg-transparent dark:hover:bg-red-800/50 dark:text-red-600'
        case 'warning':
          return 'bg-yellow-50 text-yellow-500 hover:bg-yellow-100 focus:ring-offset-yellow-50 focus:ring-yellow-600 dark:bg-transparent dark:hover:bg-yellow-800/50 dark:text-yellow-600'
        default:
          return ''
      }
    },
  },

}
</script>
