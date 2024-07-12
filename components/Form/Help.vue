<template>
  <div class="col-start-2 text-center">
    <div class="hs-tooltip inline-block">
      <button
        tabindex="-1"
        type="button"
        class="hs-tooltip-toggle  inline-flex justify-center items-center gap-2 rounded-full text-gray-400 hover:border-blue-200 hover:text-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-white/10 dark:hover:border-white/10 dark:hover:text-white"
      >
        <Icon name="tabler:help" />
        <span
          class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
          role="tooltip"
        >
          <slot />
        </span>
      </button>
    </div>
  </div>
</template>
