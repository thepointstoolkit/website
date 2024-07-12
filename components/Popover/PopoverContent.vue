<template>
  <div
    class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible hidden opacity-0 transition-opacity absolute invisible z-10  bg-white border border-gray-100 text-start rounded-xl shadow-md after:absolute after:top-0 after:-start-4 after:w-4 after:h-full dark:bg-neutral-800 dark:border-neutral-700 w-full max-w-md md:max-w-lg lg:max-w-fit"
    role="tooltip"
  >
    <slot />
  </div>
</template>
