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
      origin: [ process.env.BASE_URL +':80', process.env.BASE_URL +':3000', process.env.BASE_URL +':1337',process.env.BASE_URL +':1337', process.env.BASE_URL ]
    }
  },
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
