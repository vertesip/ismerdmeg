#!/bin/sh

docker-compose up -d
winpty docker exec -it frontend //bin//sh -c "npm install nuxt && npm run dev"