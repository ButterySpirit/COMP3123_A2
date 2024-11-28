# Use the official Node.js image as the base
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install frontend dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the frontend for production
RUN npm run build

# Use an nginx image to serve the React build files
FROM nginx:stable
COPY --from=0 /app/build /usr/share/nginx/html

# Expose port 80 for the frontend
EXPOSE 80
