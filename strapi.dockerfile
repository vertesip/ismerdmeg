FROM node:14

# Installing libvips-dev for sharp compatability
RUN apt-get update && apt-get install -y libvips-dev

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY ./strapi/package.json ./

ENV PATH /opt/node_modules/.bin:$PATH

RUN yarn config set network-timeout 600000 -g
RUN yarn add --platform=linux --arch=x64 sharp
RUN yarn install

WORKDIR /opt/app
COPY ./strapi .

RUN yarn build
EXPOSE 1337

CMD ["yarn", "start"]