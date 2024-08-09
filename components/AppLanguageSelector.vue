<template>
  <div class="hs-dropdown [--placement:top-left] relative inline-flex">
    <button
      id="footer-language-dropdown"
      type="button"
      class="hs-dropdown-toggle py-2 px-3 inline-flex items-center align-middle gap-x-2 text-sm rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
    >
      <div
        class="align-middle text-3xl size-4 rounded-full overflow-hidden flex justify-center items-center text-center"
      >
        <span>{{ currentLocale.flag }}</span>
      </div>
      {{ $t('lang.' + currentLocale.code) }}
      <svg
        class="hs-dropdown-open:rotate-180 flex-shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
      class="hs-dropdown-menu w-40 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
      aria-labelledby="footer-language-dropdown"
    >
      <NuxtLink
        v-for="availableLocale in availableLocales"
        :key="availableLocale.code"
        class="flex items-center gap-x-2 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
        :to="switchLocalePath(availableLocale.code)"
      >

        <div
          class="align-middle text-3xl size-4 rounded-full overflow-hidden flex justify-center items-center text-center"
        >
          <span>{{ availableLocale.flag }}</span>
        </div>

        {{ $t('lang.' + availableLocale.code) }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return locales.value.filter(i => i.code !== locale.value)
})

const currentLocale = computed(() => {
  return locales.value.filter(i => i.code === locale.value)[0]
})
</script>
