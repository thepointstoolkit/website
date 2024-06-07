import type { FetchOptions } from 'ofetch';
import type { SeatsAeroApiResponse, SeatsAeroCachedData } from "./seatsaero";
import FetchFactory from "../factory";

class CachedSearchModule extends FetchFactory<SeatsAeroApiResponse<SeatsAeroCachedData>> {
  private ENDPOINT = '/search';

  async get(
    originAirport: string,
    destinationAirport: string,
    cabin: string,
    startDate: string,
    endDate: string,
    cursor: number,
    take: number,
    orderBy: string,
    skip: number,
  ) {

    const fetchOptions: FetchOptions<'json'> = {
      query: {
        origin_airport: originAirport,
        destination_airport: destinationAirport,
        cabin: cabin,
        start_date: startDate,
        end_date: endDate,
        cursor: cursor,
        take: take ?? 1000,
        order_by: orderBy,
        skip: skip,
      },
    };
    return this.call(
      'GET',
      this.ENDPOINT,
      undefined, // body,
      fetchOptions
    )
  }

}

export default CachedSearchModule;
