# Stage 1
FROM node:14 as build-stage

WORKDIR /client
COPY package.json .
RUN npm install
COPY . .

ARG VITE_APP_API
ENV VITE_APP_API=$VITE_APP_API

RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /client/dist /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'