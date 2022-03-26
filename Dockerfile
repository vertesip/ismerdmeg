# Dockerfile
FROM node:16.4.2-alpine

# create destination directory
RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY ./frontend /usr/src/frontend/
RUN apk add sudo
RUN sudo rm -rf node_modules package-lock.json && npm install
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "start" ]