# Dockerfile
FROM node:16.4.2-alpine

# Create destination directory
RUN mkdir -p /usr/src/frontend
WORKDIR /usr/src/frontend

# Update and install vim and git
RUN apk update && apk upgrade
RUN apk add git
RUN apk add vim

# Copy package.json to install dependencies
COPY ./frontend/package.json /usr/src/frontend/
RUN npm install

# Set port
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000