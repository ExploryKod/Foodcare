FROM node:lts-alpine
WORKDIR "/app"
COPY .server/package.json ./
RUN cd server \
    && npm install \
    && npm install pm2 -g
    
COPY . .
CMD ["pm2-runtime", "ecosystem.config.js"]
EXPOSE 80