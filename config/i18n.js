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
    '/tools/index': {
      en: '/tools',
      pt: '/ferramentas',
    },
    '/tools/api-playground/index': {
      en: '/tools/api-playground',
      pt: '/ferramentas/api-playground',
    },
    '/tools/api-playground/cached-search': {
      en: '/tools/api-playground/cached-search',
      pt: '/ferramentas/api-playground/cached-search',
    },
    '/tools/routes/index': {
      en: '/tools/routes',
      pt: '/ferramentas/rotas',
    },
    '/tools/routes/yearly-calendar': {
      en: '/tools/routes/yearly-calendar',
      pt: '/ferramentas/rotas/calendario-anual',
    },
  },
}
