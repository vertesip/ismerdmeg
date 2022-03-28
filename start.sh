#!/bin/sh

docker-compose up -d
winpty docker exec -it frontend //bin//sh -c "npm install nuxt && npm run dev"
#winpty docker exec -it backend //bin//sh -c "npm install @nuxtjs/apollo graphql graphql-tag"