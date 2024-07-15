export default {
  legacy: false,
  fallbackLocale: 'en',
  defaultLocale: 'en',
  lazy: true,
  langDir: 'lang',
  locales: [
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      files: ['en.json'],
      flag: '🇺🇸',
    },
    {
      code: 'pt',
      name: 'Portuguese',
      iso: 'pt-BR',
      files: ['pt.json'],
      flag: '🇧🇷',
    },
  ],
  customRoutes: 'config',
  pages: {
    'api-playground/index': {
      en: '/api-playground',
      pt: '/api-playground',
    },
    'api-playground/cached-search': {
      en: '/api-playground/cached-search',
      pt: '/api-playground/cached-search',
    },
    'routes/index': {
      en: '/routes',
      pt: '/rotas',
    },
    'routes/yearly-calendar': {
      en: '/routes/yearly-calendar',
      pt: '/rotas/calendario-anual',
    },
  },
}
