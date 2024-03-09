FROM node:lts-alpine AS base
WORKDIR /app

FROM base AS builder
COPY ./package.json ./
RUN npm install
#RUN npm install pm2 -g

COPY . .
#CMD ["pm2-runtime", "ecosystem.config.js"]
FROM base AS final
WORKDIR /app
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/package-lock.json /app/package-lock.json
COPY . .
CMD ["npm", "run", "start"]