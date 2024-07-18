import { shallowRef } from 'vue'
import { useSeatsAeroApiStore } from '@/stores/seatsAeroApi'
import { useNotificationStore } from '@/stores/notification'

export const useSeatsAeroCachedSearchApi = () => {
  const response = useState('cachedDataApiResponse', () => shallowRef([]))
  const searchFilters = useState('cachedDataApiResponseFilters', () => shallowRef({}))
  const nuxtApp = useNuxtApp()
  const config = useRuntimeConfig()
  const searchConfiguration = {
    aggregations: {
      Source: {
        title: 'Source',
        size: 30,
        conjunction: false,
        hide_zero_doc_count: true,
      },
      HasDirectFlight: {
        title: 'HasDirectFlight',
        size: 2,
        conjunction: false,
        hide_zero_doc_count: true,
      },
      Cabins: {
        title: 'Cabins',
        size: 8,
        sort: 'key',
        order: 'asc',
        conjunction: false,
        hide_zero_doc_count: true,
      },
      OriginAirport: {
        title: 'Origin Airport',
        size: 100,
        conjunction: false,
        hide_zero_doc_count: true,
      },
      DestinationAirport: {
        title: 'Destination Airport',
        size: 100,
        conjunction: false,
        hide_zero_doc_count: true,
      },
      OriginRegion: {
        title: 'Origin Region',
        size: 10,
        conjunction: false,
        hide_zero_doc_count: true,
      },
      DestinationRegion: {
        title: 'Destination Region',
        size: 10,
        conjunction: false,
        hide_zero_doc_count: true,
      },
      Month: {
        title: 'Month',
        size: 12,
        conjunction: false,
        hide_zero_doc_count: true,
      },
      Date: {
        title: 'Date',
        size: 365,
        conjunction: false,
        hide_zero_doc_count: true,
      },
    },
  }

  async function clearResponse() {
    response.value = []
  }

  async function fetchAPi(formData) {
    const seatsAeroApiStore = useSeatsAeroApiStore()
    const notificationStore = useNotificationStore()
    try {
      const { data, rateLimit, moreURL, hasMore, count, cursor } = await $fetch('/api/seatsaero/search', {
        method: 'POST',
        body: formData,
        headers: {
          'Seats-Aero-Api-Key': seatsAeroApiStore.apiKey,
        },
      })
      seatsAeroApiStore.updateRateLimit(rateLimit)
      return { data, rateLimit, moreURL, hasMore, count, cursor }
    }
    catch (error) {
      notificationStore.addNotification('Seats.aero API error', error?.data.message, 'error')
    }
  }

  async function get(formData) {
    let hasMore = true
    let apiResponse

    clearResponse()

    while (hasMore) {
      apiResponse = await fetchAPi(formData)

      response.value = [
        ...response.value,
        ...apiResponse.data,
      ]

      const moreURL = new URL(config.public.seatsAeroApiPath + apiResponse.moreURL)
      formData.take = moreURL.searchParams.get('take')
      formData.cursor = moreURL.searchParams.get('cursor')
      formData.skip = moreURL.searchParams.get('skip')

      hasMore = apiResponse.hasMore
    }

    nuxtApp.callHook('ajax:finish')
  }
  return {
    response,
    get,
    searchConfiguration,
    searchFilters,
  }
}
