FROM node:alpine AS base
WORKDIR /app
COPY package.json ./

FROM base AS dependencies
RUN npm i -f && npm cache clean --force

FROM dependencies AS build
COPY . .
RUN npm run build

FROM nginx:stable-alpine AS release
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
cmd ["nginx", "-g", "daemon off;"]