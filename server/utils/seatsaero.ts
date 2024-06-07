import type { FetchOptions } from 'ofetch'
import { $fetch } from 'ofetch'
import CachedSearchModule from '~/repository/seatsaero/CachedSearch'

interface ISeatsAeroModule {
  cachedData: CachedSearchModule
}

export default function (config) {
  const fetchOptions: FetchOptions = {
    baseURL: config.public.seatsAeroApiPath,
    headers: {
      'Partner-Authorization': config.seatsAeroApiToken,
      'Accept': 'application/json',
    },
    onResponse: async (context) => {
      const rateLimit = {
        Limit: context.response.headers.get('x-ratelimit-limit'),
        Remaining: context.response.headers.get('x-ratelimit-remaining'),
        Reset: context.response.headers.get('x-ratelimit-reset'),
      }
      context.response._data = {
        rateLimit: rateLimit,
        ...context.response._data,
      }
    },
  }
  const apiFecther = $fetch.create(fetchOptions)
  const seatsaeroApiModule: ISeatsAeroModule = {
    cachedData: new CachedSearchModule(apiFecther),
  }

  return seatsaeroApiModule
};
