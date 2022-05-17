# Dockerfile
FROM node:14.16.1-alpine

RUN apk update && apk upgrade
# Add node modules outside the project folder
WORKDIR /usr/src
COPY ./nuxt/package.json ./
RUN npm install
ENV PATH=/usr/src/node_modules/.bin:$PATH

#Start the app
WORKDIR /usr/src/nuxt
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

CMD [ "npm", "run", "dev" ]