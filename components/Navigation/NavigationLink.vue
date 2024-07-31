<template>
  <NuxtLink
    class="py-3 ps-px sm:px-3 sm:py-6 font-medium text-gray-500 hover:text-gray-400 font-medium dark:text-neutral-400 dark:hover:text-neutral-500"
    active-class="text-red-600 dark:text-red-500" v-bind="$props">
    <slot />

  </NuxtLink>
</template>
