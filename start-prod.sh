#!/bin/sh
DOCKER_BUILDKIT=1 docker compose -f docker-compose.yml build --build-arg NODE_ENV=production
docker compose -f docker-compose.yml up -d
docker compose up -d