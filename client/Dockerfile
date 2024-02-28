# base image
FROM node:18-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install --silent --progress=false --no-cache && \
  npm install -g npm@7.16.0


# add app
COPY . .

ENV CHOKIDAR_USEPOLLING=true

# start app
CMD ["npm", "run", "start:dev"]


