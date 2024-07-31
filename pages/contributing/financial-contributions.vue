<template>
  <!-- Features -->
      <!-- Title -->
      <SectionTitle :title="t('section.title')"
        :subtitle="t('section.subtitle')" />

      <!-- End Title -->

      <div class="relative xl:w-10/12 xl:mx-auto">
        <!-- Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div>
            <!-- Card -->
            <div
              class="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800">
              <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
                Professional</h3>
              <div class="text-sm text-gray-500 dark:text-neutral-500">
                Everything a
                small team needs.</div>

              <div class="mt-5">
                <span
                  class="text-6xl font-bold text-gray-800 dark:text-neutral-200">$18</span>
                <span
                  class="text-lg font-bold text-gray-800 dark:text-neutral-200">.00</span>
                <span class="ms-3 text-gray-500 dark:text-neutral-500">USD /
                  monthly</span>
              </div>

              <div
                class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                <!-- List -->
                <ul class="space-y-2 text-sm sm:text-base">
                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Up to 10 people
                    </span>
                  </li>

                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Collect data
                    </span>
                  </li>

                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Code extensibility
                    </span>
                  </li>
                </ul>
                <!-- End List -->

                <!-- List -->
                <ul class="space-y-2 text-sm sm:text-base">
                  <li class="flex gap-x-3">
                    <span
                      class="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Custom reports
                    </span>
                  </li>

                  <li class="flex gap-x-3">
                    <span
                      class="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Product support
                    </span>
                  </li>

                  <li class="flex gap-x-3">
                    <span
                      class="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Activity reporting
                    </span>
                  </li>
                </ul>
                <!-- End List -->
              </div>

              <div
                class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p class="text-sm text-gray-500 dark:text-neutral-500">Cancel
                    anytime.</p>
                  <p class="text-sm text-gray-500 dark:text-neutral-500">No card
                    required.</p>
                </div>

                <div class="flex justify-end">
                  <button type="button"
                    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">Start
                    free trial</button>
                </div>
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div>
            <!-- Card -->
            <div
              class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-neutral-900 dark:border-neutral-800 dark:shadow-gray-900/20">
              <h3 class="text-xl font-bold text-gray-800 dark:text-neutral-200">
                Teams</h3>
              <div class="text-sm text-gray-500 dark:text-neutral-500">For
                growing
                businesses.</div>
              <span
                class="absolute top-0 end-0 rounded-se-xl rounded-es-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-white dark:text-neutral-800">Most
                popular</span>

              <div class="mt-5">
                <span
                  class="text-6xl font-bold text-gray-800 dark:text-neutral-200">$36</span>
                <span
                  class="text-lg font-bold text-gray-800 dark:text-neutral-200">.99</span>
                <span class="ms-3 text-gray-500 dark:text-neutral-500">USD /
                  monthly</span>
              </div>

              <div
                class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                <!-- List -->
                <ul class="space-y-2 text-sm sm:text-base">
                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Up to 10 people
                    </span>
                  </li>

                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Collect data
                    </span>
                  </li>

                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Code extensibility
                    </span>
                  </li>
                </ul>
                <!-- End List -->

                <!-- List -->
                <ul class="space-y-2 text-sm sm:text-base">
                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Custom reports
                    </span>
                  </li>

                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Product support
                    </span>
                  </li>

                  <li class="flex gap-x-3">
                    <span
                      class="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
                      <svg class="shrink-0 size-3.5"
                        xmlns="http://www.w3.org/2000/svg" width="24"
                        height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </span>
                    <span class="text-gray-800 dark:text-neutral-200">
                      Activity reporting
                    </span>
                  </li>
                </ul>
                <!-- End List -->
              </div>

              <div
                class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p class="text-sm text-gray-500 dark:text-neutral-500">Cancel
                    anytime.</p>
                  <p class="text-sm text-gray-500 dark:text-neutral-500">No card
                    required.</p>
                </div>

                <div class="flex justify-end">
                  <button type="button"
                    class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Start
                    free trial</button>
                </div>
              </div>
            </div>
            <!-- End Card -->
          </div>
        </div>
        <!-- End Grid -->

        <!-- SVG Element -->
        <div
          class="hidden md:block absolute top-0 end-0 translate-y-16 translate-x-16">
          <svg class="w-16 h-auto text-orange-500" width="121" height="135"
            viewBox="0 0 121 135" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
              stroke="currentColor" stroke-width="10" stroke-linecap="round" />
            <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
              stroke="currentColor" stroke-width="10" stroke-linecap="round" />
            <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
              stroke="currentColor" stroke-width="10" stroke-linecap="round" />
          </svg>
        </div>
        <!-- End SVG Element -->

        <!-- SVG Element -->
        <div
          class="hidden md:block absolute bottom-0 start-0 translate-y-16 -translate-x-16">
          <svg class="w-56 h-auto text-cyan-500" width="347" height="188"
            viewBox="0 0 347 188" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
              stroke="currentColor" stroke-width="7" stroke-linecap="round" />
          </svg>
        </div>
        <!-- End SVG Element -->
      </div>

      <div class="mt-7 text-center">
        <p class="text-xs text-gray-400">
          Prices in USD. Taxes may apply.
        </p>
      </div>
</template>
<script setup>
const { t } = useI18n({
  useScope: 'local',
})
</script>

<i18n lang="json">{
  "en": {
    "section": {
      "title": "Financial Contributions",
      "subtitle": "Help support the Lotus Docs development team by becoming a financial contributor."
    }
  },

  "pt": {
    "section": {
      "title": "Financial Contributions",
      "subtitle": "Help support the Lotus Docs development team by becoming a financial contributor."
    }
  }
}
</i18n>
