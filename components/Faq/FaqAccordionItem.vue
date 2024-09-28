<template>
  <div
    id="hs-basic-with-title-and-arrow-stretched-heading-two"
    class="hs-accordion pt-6 pb-3"
  >
    <button
      class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
      aria-expanded="false"
      aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
    >
      <slot name="title" />
      <svg
        class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
      <svg
        class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400"
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
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
    <div
      id="hs-basic-with-title-and-arrow-stretched-collapse-two"
      class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
      role="region"
      aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
    >
      <p class="text-gray-600 dark:text-neutral-400">
        <slot />
      </p>
    </div>
  </div>
</template>
