<template>
  <aside
    id="app-sidebar"
    class="w-[23rem] max-w-[90vw] hs-overlay [--auto-close:lg] hidden hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] bg-white lg:bg-transparent border-e border-gray-200 overflow-y-auto h-100
    lg:translate-x-0 lg:block lg:relative lg:z-0
    max-h-100
    [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700"
  >
    <nav
      class="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
      data-hs-accordion-always-open
    >
      <slot />
    </nav>
  </aside>
</template>

<script setup>
// const isMobile = ref(false);

const isMobile = computed(() => window.innerWidth <= 768)

onMounted(() => {
  if (isMobile.value) {
    setTimeout(() => {
      window.HSOverlay.open('#app-sidebar')
    }, 900)
  }
})
</script>
