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
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]