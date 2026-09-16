FROM docker.io/library/node:lts-alpine

WORKDIR /app

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . ./

EXPOSE 5314/tcp
ENV PORT=5314
VOLUME ["/app/data"]
CMD ["pnpm","dev"]
