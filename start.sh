#!/bin/sh
if [ "${NODE_ENV}" = "development" ]; 
    then
    DOCKER_BUILDKIT=1 docker compose -f docker-compose.yml build --build-arg NODE_ENV=development
    docker compose -f docker-compose.yml up -d
    docker compose up -d

    exit;
fi 

if [ "${NODE_ENV}" = "production" ]; 
    then
    DOCKER_BUILDKIT=1 docker compose -f docker-compose.yml build --build-arg NODE_ENV=production
    docker compose -f docker-compose.yml up -d
    docker compose up -d

    exit;
fi 
