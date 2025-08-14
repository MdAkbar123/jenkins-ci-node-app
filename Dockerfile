# Use official Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY app/package*.json ./
RUN npm install

# Copy the rest of the app
COPY app .

# Expose port and run app
EXPOSE 3000
CMD [ "npm", "start" ]
