import { useLocalStorage } from "@vueuse/core"
import { defineStore } from 'pinia';


export const useSeatsAeroApiStore = defineStore('app', {
  state: () => ({
    apiKey: useLocalStorage('seatsaero-apiKey', ''),
    rateLimitLimit: useLocalStorage('seatsaero-rateLimit-limit',1000),
    rateLimitRemaining: useLocalStorage('seatsaero-rateLimit-remaining',1000),
    rateLimitReset: useLocalStorage('seatsaero-rateLimit-reset',0),
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
    }
  },
  getters: {
    getApiKey: (state) => state.apiKey,
    rateLimitUsed: (state) => state.rateLimitLimit - state.rateLimitRemaining,
    rateLimitPercentage():number {
      return this.rateLimitUsed * 100 / this.rateLimitLimit
    }
  },
   hydrate(state, initialState) {
     state.apiKey = useLocalStorage('seatsaero-apiKey', initialState.apiKey)
     state.rateLimitLimit = useLocalStorage('seatsaero-rateLimit-limit', initialState.rateLimitLimit)
     state.rateLimitRemaining = useLocalStorage('seatsaero-rateLimit-remaining', initialState.rateLimitRemaining)
     state.rateLimitReset = useLocalStorage('seatsaero-rateLimit-reset', initialState.rateLimitReset)
  },
})
