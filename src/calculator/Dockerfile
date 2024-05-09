FROM node

WORKDIR /app

COPY package.json .
RUN npm i -f

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]