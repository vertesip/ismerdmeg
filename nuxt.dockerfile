# Dockerfile
FROM node:14.16.1-alpine

RUN apk update && apk upgrade
# Add node modules outside the project folder
WORKDIR /usr/src

RUN mkdir -p nuxt
#RUN --mount=type=bind,source=./nuxt,target=/usr/src/nuxt
COPY ./nuxt /usr/src/nuxt

COPY ./nuxt/package.json ./
RUN npm install
ENV PATH=/usr/src/node_modules/.bin:$PATH

ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}

#Start the app

RUN if [ "${NODE_ENV}" = "production" ]; \
    then npm run build; \
    fi 

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000

RUN sh -c "if [ '${NODE_ENV}' == 'development' ] ; then echo npm run dev > run.sh; else echo npm start > run.sh; fi; chmod 777 run.sh;"

CMD ./run.sh