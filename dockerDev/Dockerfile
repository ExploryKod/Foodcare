# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the container
COPY .. .

# Expose port 5000 for the server
EXPOSE 5000

# Set the default command to start the server with nodemon
CMD ["npm", "run", "dev"]
