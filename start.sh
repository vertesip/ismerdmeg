#!/bin/sh

#docker compose build #--no-cache
docker compose up -d

docker exec -it nuxt //bin//sh -c "npm install --dev && npm install nuxt && npm run dev"