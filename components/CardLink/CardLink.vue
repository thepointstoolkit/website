<template>
  <NuxtLink
    class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800"
    href="#"
  >
    <div class="p-4 md:p-5">
      <div class="flex">
        <div class="mt-1 flex-shrink-0 size-5 ">
          <slot name="leading" />
        </div>
        <div class="grow ms-5">
          <h3
            class="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200"
          >
            <slot name="title" />
          </h3>
          <p class="text-sm text-gray-500 dark:text-neutral-500">
            <slot />
          </p>
        </div>
        <div class="ps-3 content-center">
          <slot name="trailing">

            <svg
              class="flex-shrink-0 size-5 text-gray-800 dark:text-neutral-200"
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
              <path d="m9 18 6-6-6-6" />
            </svg>

          </slot>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
