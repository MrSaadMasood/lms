FROM node:20-alpine

WORKDIR /app

COPY package* .

RUN npm ci

COPY . .

CMD [ "npm", "run", "dev" ]



