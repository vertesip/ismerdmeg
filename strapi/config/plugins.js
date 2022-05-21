module.exports = () => ({
    meilisearch: {
      config: {
        // Your meili host
        host: "http://meilisearch:7700",
        // Your master key or private key
        apiKey: "e54fecca9259d9fabd9571e1e735bf5ee69f275ee38e428ef9edca0a6a31",
      }
    },
    graphql: {
        config: {
          endpoint: '/graphqlapi',
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