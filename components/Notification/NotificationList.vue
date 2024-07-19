<template>
  <Alert
    v-for="notification in notifications"
    :id="`notification-${notification.id}`"
    :key="notification.id"
    :type="notification.type"
    :title="notification.title"
    class="my-5"
  >
    <p v-html="notification.message" />
  </Alert>
</template>

<script setup>
import { useNotificationStore } from '~/stores/notification'

const notificationStore = useNotificationStore()

const notifications = computed(() =>
  notificationStore.notifications,
)
</script>
