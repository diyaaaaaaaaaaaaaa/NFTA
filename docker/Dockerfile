# Dockerfile for frontend
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY ../frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source
COPY ../frontend/ ./

# Build the frontend
RUN npm run build

# Use nginx to serve static content
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
