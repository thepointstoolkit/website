<template>
  <Alert
    v-show="isVisible"
    :title="$t('api_key_warning.title')"
    type="error"
    class="my-5"
  >
    {{ $t("api_key_warning.msg") }}
    <a
      href="https://seats.aero/apikey"
      target="_blank"
      class="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-bold"
    >
      {{ $t("strings.here") }}
    </a>.
  </Alert>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'
import { useSeatsAeroApiStore } from '@/stores/seatsAeroApi'

const store = useSeatsAeroApiStore()
const { apiKey } = storeToRefs(store)
const isVisible = ref(false)

const showMissingApiKeyWarning = () => {
  isVisible.value = true
}

const hideMissingApiKeyWarning = () => {
  isVisible.value = false
}

watch(apiKey, (newValue) => {
  if (!newValue) {
    showMissingApiKeyWarning()
  }
  else {
    hideMissingApiKeyWarning()
  }
})

onMounted(() => {
  if (!apiKey.value) {
    showMissingApiKeyWarning()
  }
  else {
    hideMissingApiKeyWarning()
  }
})
</script>
