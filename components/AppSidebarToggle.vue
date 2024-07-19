
<template>
        <button type="button"
          class="p-2 flex justify-center items-center gap-x-1.5 text-xs rounded-lg border border-gray-200 text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 lg:hidden"
          data-hs-overlay="#app-sidebar" aria-controls="app-sidebar"
          aria-label="Toggle navigation">
          <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
            <path d="M17 8L21 12L17 16M3 12H13M3 6H13M3 18H13"></path>
          </svg>
          {{$t('buttons.sidebar')}}
        </button>
</template>
