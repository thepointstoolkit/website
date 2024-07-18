import { format } from 'date-fns'
import { SeatsAeroApiResponse, SeatsAeroCachedData } from "@/repository/seatsaero/seatsaero.d.ts"


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

function formatResponse(r: SeatsAeroApiResponse) {

  return {
    rateLimit: r.rateLimit,
    moreURL: r.moreURL,
    hasMore: r.hasMore,
    count: r.count,
    cursor: r.cursor,
    data: r.data.map((i: SeatsAeroCachedData) => {
      return {
        ID: i.ID,
        RouteId: i.Route.ID,
        ...i,
        ...i.Route,
        Month: format(i.ParsedDate, 'yyyy-MM'),
        HasDirectFlight: i.YDirect || i.WDirect || i.JDirect || i.FDirect,
        Cabins: getAvailableCabinsIn(i),
      }
    }),

  }
}
function getAvailableCabinsIn(i: SeatsAeroCachedData) {
  const availableCabins: string[] = [];
  if (i.YAvailable) {
    availableCabins.push("Y");
  }
  if (i.WAvailable) {
    availableCabins.push("W");
  }

  if (i.JAvailable) {
    availableCabins.push("J");
  }

  if (i.FAvailable) {
    availableCabins.push("F");
  }
  if (i.YDirect) {
    availableCabins.push("Direct Y");
  }
  if (i.WDirect) {
    availableCabins.push("Direct W");
  }

  if (i.JDirect) {
    availableCabins.push("Direct J");
  }

  if (i.FDirect) {
    availableCabins.push("Direct F");
  }

  return availableCabins;
}

