export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return event.context.seatsAeroApi.cachedData.get({
    originAirport: body.origin,
    destinationAirport: body.destination,
    startDate: body.startDate,
    endDate: body.endDate,
  })
})
