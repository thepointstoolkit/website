import { format } from 'date-fns'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return event.context.seatsAeroApi.cachedData.get({
    originAirport: body.origin,
    destinationAirport: body.destination,
    startDate: body.startDate,
    endDate: body.endDate,
    cabin: body.cabin,
    source: body.source,
    take: body.take,
    cursor: body.cursor,
    skip: body.skip,
  }).then(r => formatResponse(r))
})

function formatResponse(r) {
  return {
    rateLimit: r.rateLimit,
    moreURL: r.moreURL,
    hasMore: r.hasMore,
    count: r.count,
    cursor: r.cursor,
    data: r.data.map((i) => {
      return {
        ID: i.ID,
        RouteId: i.Route.ID,
        ...i,
        ...i.Route,
        Month: format(i.ParsedDate, 'yyyy-MM'),
      }
    }),

  }
}
