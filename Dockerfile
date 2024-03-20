FROM docker.io/library/node:lts-alpine

WORKDIR /app 

COPY package*.json ./
RUN npm install
COPY . ./

EXPOSE 5314/tcp 
ENV PORT=5314
VOLUME ["/app/data"]
CMD ["npm","run","dev"]