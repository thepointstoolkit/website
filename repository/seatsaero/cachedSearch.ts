import type { FetchOptions } from 'ofetch'
import FetchFactory from '../factory'
import type { SeatsAeroApiResponse, SeatsAeroCachedData } from './seatsaero'
import cleanEmpty from '@/utils/cleanObject'

class CachedSearchModule extends FetchFactory<SeatsAeroApiResponse<SeatsAeroCachedData>> {
  private ENDPOINT = '/search'

  async get({
    originAirport,
    destinationAirport,
    startDate = null,
    endDate = null,
    cabin = null,
    cursor = null,
    take = 1000,
    orderBy = null,
    skip = null,
  }: {
    originAirport: string
    destinationAirport: string
    cabin: string | null
    startDate: string | null
    endDate: string | null
    cursor: number | null
    take: number | null
    orderBy: string | null
    skip: number | null
  }) {
    const cleanQuery = cleanEmpty({
      origin_airport: originAirport,
      destination_airport: destinationAirport,
      cabin: cabin,
      start_date: startDate,
      end_date: endDate,
      cursor: cursor,
      take: take,
      order_by: orderBy,
      skip: skip,
    })

    const fetchOptions: FetchOptions<'json'> = {
      query: cleanQuery,
    }
    console.log({ fetchOptions })
    return this.call(
      'GET',
      this.ENDPOINT,
      undefined, // body,
      fetchOptions,
    )
  }
}

export default CachedSearchModule
