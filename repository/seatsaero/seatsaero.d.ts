export interface RateLimit {
  Limit: number
  Remaining: number
  Reset: number
}
export interface SeatsAeroApiResponse<T> {
  data: Array<T>
  count: number
  hasMore: boolean
  cursor: number
  rateLimit: RateLimit
}
export interface SeatsAeroRoute {
  ID: string;
  OriginAirport: string;
  OriginRegion: string;
  DestinationAirport: string;
  DestinationRegion: string;
  NumDaysOut: number;
  Distance: number;
  Source: string;
}

export interface SeatsAeroCachedData {
  ID: string;
  RouteID: string;
  Route: SeatsAeroRoute;
  Date: string;
  ParsedDate: string;

  YAvailable: boolean;
  WAvailable: boolean;
  JAvailable: boolean;
  FAvailable: boolean;

  YMileageCost: string;
  WMileageCost: string;
  JMileageCost: string;
  FMileageCost: string;

  YRemainingSeats: number;
  WRemainingSeats: number;
  JRemainingSeats: number;
  FRemainingSeats: number;

  YAirlines: string;
  WAirlines: string;
  JAirlines: string;
  FAirlines: string;

  YDirect: boolean;
  WDirect: boolean;
  JDirect: boolean;
  FDirect: boolean;

  Source: string;
  CreatedAt: string;
  UpdatedAt: string;
  AvailabilityTrips: string;
}
