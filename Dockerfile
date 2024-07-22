# Step 1: Build the React application
FROM node:20-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Step 2: Serve the application with `serve`
FROM node:20-alpine

# Install `serve` globally
RUN npm install -g serve

# Set working directory
WORKDIR /app

# Copy build output
COPY --from=build /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["serve", "-s", "dist", "-l", "3000"]
