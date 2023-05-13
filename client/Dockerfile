# base image
FROM node:18-alpine

# set working directory
WORKDIR /app

# install app dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . .

ENV CHOKIDAR_USEPOLLING=true

# start app
CMD ["npm", "start"]

