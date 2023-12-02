FROM docker.io/library/node:lts-alpine 

# Prepare work directory 
WORKDIR /app 

# Prepase build deps 
COPY package.json ./
COPY package-lock.json ./
RUN npm i

# Copy all source files
COPY . ./

# Build 
RUN npm run build 

ENV NODE_ENV=production

EXPOSE 5314 

ENV PORT=5314

CMD ["npm", "start"]


