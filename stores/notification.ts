import { defineStore } from 'pinia'

interface INotification {
  id: number
  title: string
  message: string
  type: string
  duration: number
}

export const useNotificationStore = defineStore('notifications', {
  state: () => ({
    notifications: [] as INotification[],
    nextId: 1,
  }),
  actions: {
    addNotification(title: string, message: string, type: string, duration: number = 0) {
      const notification = {
        id: this.nextId,
        title,
        message,
        type,
      }
      this.notifications.push(notification)

      if (duration > 0) {
        setTimeout(() => {
          this.removeNotification(notification.id)
        }, duration)
      }
      this.nextId++
      return notification
    },
    removeNotification(id: number) {
      console.log({id})
      this.notifications = this.notifications.filter(msg => msg.id !== id)
    },
  },
})
