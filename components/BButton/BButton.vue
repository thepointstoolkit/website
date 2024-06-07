<template>
  <button
    type="button"
    v-bind="$props"
    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border disabled:pointer-events-none"
  >
    <slot />
  </button>
</template>
