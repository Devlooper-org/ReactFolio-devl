# Stage 1: Build the React app using Node.js
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) for dependency installation
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy the rest of the app files into the container
COPY . .

# Build the React app with Vite
RUN npm run build

# Stage 2: Serve the built app using Nginx
FROM nginx:alpine

# Copy the build files from the previous stage to the Nginx container
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for serving the app
EXPOSE 80

# Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
