# Stage 1: Build the frontend
FROM node:20-alpine AS build-frontend

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package.json files
COPY frontend/package*.json ./frontend/

# Install frontend dependencies
WORKDIR /app/frontend
RUN pnpm install

# Copy frontend source and build
COPY frontend/ ./
RUN pnpm run build

# Stage 2: Setup backend
FROM node:20-alpine AS build-backend

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

COPY backend/package*.json ./backend/

WORKDIR /app/backend
RUN pnpm install

# Copy backend source
COPY backend/ ./

# Stage 3: Final Production Image
FROM node:20-alpine

WORKDIR /app/backend

# Install pnpm (needed if there are runtime scripts relying on it, though we'll use node to run)
RUN npm install -g pnpm

# Copy backend from previous stage
COPY --from=build-backend /app/backend /app/backend

# Copy frontend build to backend public directory
COPY --from=build-frontend /app/frontend/dist /app/backend/public

# Expose port (Render sets PORT env variable, defaulting to 3000 here)
EXPOSE 3000

# Set environment to production
ENV NODE_ENV=production

# Start the server
CMD ["node", "src/app.js"]
