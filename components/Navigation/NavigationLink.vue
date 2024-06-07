<template>
  <NuxtLink
class="py-3 ps-px sm:px-3 sm:py-6 font-medium"
    active-class=" text-blue-600 dark:text-blue-500" v-bind="$props">
    <slot />

  </NuxtLink>
</template>
