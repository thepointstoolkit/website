import AppLanguageSelector from './AppLanguageSelector.vue';
<template>
  <footer class="border-t">
    <div class="mt-auto w-full max-w-[90rem] mx-auto">
      <div
        class="py-5  border-gray-200 dark:border-neutral-700 px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-x-3">
            <div class="space-x-4 text-sm ms-4">
              <p
                class="inline-flex gap-x-2 text-gray-600  dark:text-neutral-400 ">
                {{ $t("strings.not_affiliated") }}
              </p>
            </div>
          </div>
          <div class="flex justify-between items-center space-x-4">
            <AppThemeSwitcher />
            <AppLanguageSelector />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
