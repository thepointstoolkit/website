<template>
  <div class="border-b border-gray-200 py-6">
    <h3 class="-my-3 flow-root">
      <button
        :id="`${name}-filter`"
        type="button"
        class="hs-collapse-toggle flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
        :data-hs-collapse="`#${name}-filter-group`"
      >
        <span class="font-medium text-gray-900">
          {{ $t(`filters.${title}`) }}
        </span>
        <svg
          class="hs-collapse-open:rotate-180 flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </h3>
    <div
      :id="`${name}-filter-group`"
      class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
      aria-labelledby="hs-basic-collapse"
    >
      <div class="mt-5 ps-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
})
</script>
