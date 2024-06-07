import seatsApi from '~/server/utils/seatsaero'

export default defineEventHandler((event) => {
  const config = useRuntimeConfig(event)
  const seatsAeroApiToken = getHeader(event, 'Seats-Aero-Api-Key')
  if (seatsAeroApiToken) {
    config.seatsAeroApiToken = seatsAeroApiToken
  }

  event.context.seatsAeroApi = seatsApi(config)
})
