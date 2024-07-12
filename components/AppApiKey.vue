<template>
  <div class=" flex-1 sm:flex-auto">
    <FormPassword
      id="apiKey"
      v-model="apiKey"
      class="ps-11 pe-9"
      label="Seats.aero API Key"
      :floating-label="true"
      label-classes="ps-11"
      placeholder="*********"
    >
      <div
        class="absolute inset-y-0 start-0 flex items-center pointer-events-none
    ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none"
      >
        <svg
          class="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-500"
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
          <path
            d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z"
          />
          <circle
            cx="16.5"
            cy="7.5"
            r=".5"
          />
        </svg>
      </div>
    </FormPassword>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, watch } from 'vue'
import { useNotificationStore } from '@/stores/notification'

const store = useSeatsAeroApiStore()
const { setApiKey } = store // have all non reactiave stuff here
const { apiKey } = storeToRefs(store)
const notificationStore = useNotificationStore()
const warningNotificationId = ref('')

watch(apiKey, async (newValue) => {
  setApiKey(newValue)
  if (newValue == '') {
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
const showMissingApiKeyWarning = function () {
  const notification = notificationStore.addNotification(
    'Missing Seats.aero API Key',
    'Before using this website you need to configure your Seats.aero API key, located in the menu of this website. You can get your Seats.aero API key <a href=\'https://seats.aero/apikey\' target=\'_blank\' class=\'inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-bold\'>here</a>.',
    'error',
  )
  warningNotificationId.value = notification.id
}
const hideMissingApiKeyWarning = function () {
  notificationStore.removeNotification(warningNotificationId.value)
}
</script>
