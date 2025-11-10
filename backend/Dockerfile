# Multi-stage build for production

# Stage 1: Build stage
FROM node:24-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including dev dependencies for TypeScript compilation)
RUN npm ci

# Copy source code
COPY . .

# Build TypeScript (optional, tsx can run TS directly)
RUN npm run build || echo "No build script or build failed, using tsx runtime"

# Stage 2: Production stage
FROM node:24-alpine AS production

# Install dumb-init to handle signals properly
RUN apk add --no-cache dumb-init

# Create app user for security (don't run as root)
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev && npm cache clean --force

# Copy source code (we need source since we're using tsx)
COPY --chown=nodejs:nodejs src ./src
COPY --chown=nodejs:nodejs tsconfig.json ./

# Copy built files if they exist (from builder stage)
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist 2>/dev/null || true

# Copy .env.example for reference (users should mount their own .env)
COPY --chown=nodejs:nodejs .env.example ./

# Switch to non-root user
USER nodejs

# Expose port (should match your PORT env var, default 3001)
EXPOSE 3001

# Use dumb-init to handle signals properly (for graceful shutdown)
ENTRYPOINT ["dumb-init", "--"]

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3001/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application
CMD ["npm", "start"]

