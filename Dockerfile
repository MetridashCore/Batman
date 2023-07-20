# syntax=docker/dockerfile:1

FROM node:18-alpine  as base
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
EXPOSE 3000

FROM base as prod
ENV NODE_ENV=production
RUN npm install --production
COPY . .
RUN npm run build
CMD ["npm", "run", "start"]

FROM base as dev
RUN npm install
COPY . .
CMD ["npm", "run", "dev"]
