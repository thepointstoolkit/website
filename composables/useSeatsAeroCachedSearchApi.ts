import { useSeatsAeroApiStore } from '@/stores/seatsAeroApi'
import { useNotificationStore } from '@/stores/notification'

export const useSeatsAeroCachedSearchApi = () => {
  const response = useState('cachedDataApiResponse', () => [])
  const get = async (formData) => {
    const seatsAeroApiStore = useSeatsAeroApiStore()
    const notificationStore = useNotificationStore()

    try {
      const { data, rateLimit } = await $fetch('/api/seatsaero/search', {
        method: 'POST',
        body: formData,
        headers: {
          'Seats-Aero-Api-Key': seatsAeroApiStore.apiKey,
        },
      })

      seatsAeroApiStore.updateRateLimit(rateLimit)
      response.value = data
    }
    catch (error) {
      notificationStore.addNotification('Seats.aero API error', error.data.message, 'error')
    }
  }

  return {
    response,
    get,
  }
}
