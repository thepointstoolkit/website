<template>
  <button
type="button"
    class="flex items-center w-full text-gray-500 hover:text-gray-400 font-medium dark:text-neutral-400 dark:hover:text-neutral-500">
    <slot/>
    <svg
class="flex-shrink-0 ms-2 size-4" xmlns="http://www.w3.org/2000/svg"
      width="24" height="24" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="2" stroke-linecap="round"
      stroke-linejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  </button>
</template>
