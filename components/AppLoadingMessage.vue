<template>
  <div
    class="max-w-lg mx-auto bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700"
    role="alert"
  >
    <div class="flex items-center p-4">
      <div
        class="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
        role="status"
        aria-label="loading"
      >
        <span class="sr-only">{{ $t('strings.loading') }}...</span>
      </div>
      <p class="ms-3 text-xl text-gray-700 dark:text-neutral-400">
        {{ $t(`loading_strings.${counter}`) }}
      </p>
    </div>
  </div>
</template>

<script setup>
const MAX_COUNT = 1
const counter = ref(0)
let intervalId = null

const startCounter = () => {
  intervalId = setInterval(() => {
    if (counter.value < MAX_COUNT) {
      counter.value += 1
    }
    else {
      clearInterval(intervalId)
    }
  }, 500)
}

const stopCounter = () => {
  if (intervalId) {
    clearInterval(intervalId)
  }
}

onMounted(() => {
  startCounter()
})

onUnmounted(() => {
  stopCounter()
})
</script>
