#!/bin/sh
if [ "${NODE_ENV}" = "development" ]; 
    then
    docker compose -f docker-compose.dev.yml build --build-arg NODE_ENV=development
    docker compose -f docker-compose.dev.yml up -d
    docker compose up -d

    exit;
fi 

if [ "${NODE_ENV}" = "production" ]; 
    then
    docker compose -f docker-compose.prod.yml build --build-arg NODE_ENV=production
    docker compose -f docker-compose.prod.yml up -d
    docker compose up -d

    exit;
fi 
