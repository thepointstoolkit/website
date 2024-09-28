import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
export const useSeatsAeroApiStore = defineStore('app', {
  state: () => ({
    apiKey: useStorage('seatsaero-apiKey', ''),
    rateLimitLimit: useStorage('seatsaero-rateLimit-limit', 1000),
    rateLimitRemaining: useStorage('seatsaero-rateLimit-remaining', 1000),
    rateLimitReset: useStorage('seatsaero-rateLimit-reset', 0),
  }),
  persist: true,
  actions: {
    setApiKey(apiKey) {
      this.apiKey = apiKey
    },
    updateRateLimit(rateLimit) {
      this.rateLimitLimit = rateLimit.Limit
      this.rateLimitRemaining = rateLimit.Remaining
      this.rateLimitReset = rateLimit.Reset
    },
  },
  getters: {
    getApiKey: state => state.apiKey,
    rateLimitUsed: state => state.rateLimitLimit - state.rateLimitRemaining,
    rateLimitPercentage(): number {
      return this.rateLimitUsed * 100 / this.rateLimitLimit
    },
  },
  hydrate(state, initialState) {
    state.apiKey = useLocalStorage('seatsaero-apiKey', initialState.apiKey ?? '')
    state.rateLimitLimit = useLocalStorage('seatsaero-rateLimit-limit', initialState.rateLimitLimit ?? 1000)
    state.rateLimitRemaining = useLocalStorage('seatsaero-rateLimit-remaining', initialState.rateLimitRemaining ?? 1000)
    state.rateLimitReset = useLocalStorage('seatsaero-rateLimit-reset', initialState.rateLimitReset ?? 0)
  },
})
