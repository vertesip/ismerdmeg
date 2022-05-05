export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ismerdmeg',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/geolocation.js',
    '~plugins/googlemaps.js',
    {src:'~plugins/nuxtsession.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],
  env: {
    strapiBaseUri: "http://strapi:1337"
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    //'@nuxtjs/axios'
  ],
  /* axios: {
    prefix: '/api',
    proxy: true
  },
  proxy: {
    '/api/': {
      target: 'http://strapi:1337',
      pathRewrite: {
        '^/api/': ''
      }
    }
  }, */
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: "http://strapi:1337/graphqlapi",
        browserHttpEndpoint: "http://localhost:1337/graphqlapi",
        httpLinkOptions: {
          credentials: 'same-origin'
        }
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    loaders:  {
      vue: {
         prettify: false
      }
    }
  },
}