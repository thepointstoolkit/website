<template>

  <div
    class="-mt-10 relative overflow-hidden before:absolute before:top-1/2 before:start-1/2 before:bg-[url('/svg/hyperdrive.svg')] before:bg-no-repeat before:bg-center before:w-full before:h-96 before:-z-[1] before:transform before:-translate-y-1/2 before:-translate-x-1/2 dark:before:bg-[url('../svg/component-dark/hyperdrive.svg')]">
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
      <div class="mt-5 max-w-2xl text-center mx-auto">
        <h1 class="block font-bold text-4xl md:text-5xl lg:text-6xl ">
          <AppLogo />
        </h1>
      </div>
      <!-- End Title -->

      <div class="mt-5 max-w-3xl text-center mx-auto">
        <p class="text-md lg:text-lg text-gray-600 dark:text-neutral-400">
          {{ t('hero.title') }}
        </p>
      </div>

      <!-- Buttons -->
      <div class="mt-8 gap-3 flex justify-center">
        <NuxtLink to="/tools"
          class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-red-400 to-red-600 hover:from-red-600 hover:to-red-400 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:from-red-600 focus:to-red-400 py-3 px-4"
>
          {{t('hero.cta')}}
          <Icon name="tabler:chevron-right" />
        </NuxtLink>
        <NuxtLink to="/settings"
          class="relative group p-2 ps-3 inline-flex items-center gap-x-2 text-sm font-mono rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
          {{ t('hero.configure') }}
          <span
            class="border-s ps-3.5 dark:border-neutral-700 flex justify-center items-center  size-7">
            <Icon name="tabler:tools" class="shrink-0 size-4" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="json">{
  "en": {
    "hero": {
      "title": "All the tools you need to optimize your points and miles, making your travel planning seamless and rewarding.",
      "cta": "Get Started",
      "configure": "Configure your toolkit"
    }
  },
  "pt": {
    "hero": {
      "title": "Todas as ferramentas que você precisa para otimizar seus pontos e milhas, tornando seu planejamento de viagem perfeito e sem precisar de tanto esforço.",
      "cta": "Começe Agora",
      "configure": "Configure suas ferramentas"
    }
  }
}
</i18n>
