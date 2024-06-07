export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  return event.context.seatsAeroApi.cachedData.get(
    body.origin,
    body.destination
  );
})
