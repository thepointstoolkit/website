<template>
  <Alert
v-for="notification in notifications" :key="notification.id"
    :type="notification.type" :title="notification.title">
    <p>{{ notification.message }}</p>
  </Alert>
</template>

<script setup>
import { useNotificationStore } from '~/stores/notification';

const notificationStore = useNotificationStore();

const notifications = computed(() =>
  notificationStore.notifications
);
</script>
