# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application to the container
COPY ../docker_back .

# Expose port 5000
EXPOSE 5000

# Start the server
CMD ["npm", "run", "dev"]