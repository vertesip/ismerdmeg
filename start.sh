#!/bin/sh

docker-compose up -d
winpty docker exec -it frontend //bin//sh -c "npm install && npm run dev"