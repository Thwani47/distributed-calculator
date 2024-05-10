FROM node:21-alpine AS base
WORKDIR /app
COPY package*.json ./

FROM base AS dependencies
RUN npm ci && npm cache clean --force

FROM dependencies AS build
COPY . .
RUN npm run build

FROM base AS release
COPY --from=build /app/dist ./dist
COPY --from=dependencies /app/node_modules ./node_modules
EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]