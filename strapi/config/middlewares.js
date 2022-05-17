module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      headers: '*',
      methods: ["GET", "POST"],
      origin: ['http://nginx:80', 'http://nuxt:3000', 'http://localhost:80', 'http://localhost:3000', 'http://localhost:1337', 'http://localhost', 'http://159.223.229.231:1337', 'http://159.223.229.231', 'http://159.223.229.231:3000', 'http://159.223.229.231:80']
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
