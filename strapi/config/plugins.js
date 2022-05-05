module.exports = () => ({
    meilisearch: {
      config: {
        // Your meili host
        host: "http://meilisearch:7700",
        // Your master key or private key
        apiKey: "",
      }
    },
    graphql: {
        config: {
          endpoint: '/api',
          apolloServer: {
            /* cors: {
              credentials: false,
              headers: ['Content-Type', 'Accept', 'Authorization'],
              methods: ['GET', 'PUT', 'POST'],
              origin: ['http://nginx:80', 'http://nuxt:3000', 'http://localhost:80', 'http://localhost:3000'],
            }, */
          },
        }
    }
})