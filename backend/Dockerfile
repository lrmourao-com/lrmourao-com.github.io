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

# Build TypeScript
RUN npm run build

# Stage 2: Production stage
FROM node:24-alpine AS production

# Install dumb-init to handle signals properly
RUN apk add --no-cache dumb-init

# Create app user for security
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nodejs -u 1001

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies only
RUN npm ci --omit=dev && npm cache clean --force

# Copy built files from builder stage
COPY --from=builder --chown=nodejs:nodejs /app/dist ./dist

# Copy static assets and templates
COPY --from=builder --chown=nodejs:nodejs /app/assets ./assets
COPY --from=builder --chown=nodejs:nodejs /app/src/templates ./dist/templates

# Switch to non-root user
USER nodejs

# Expose port
EXPOSE 3002

# Use dumb-init to handle signals properly
ENTRYPOINT ["dumb-init", "--"]

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3002/health', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Start the application using the compiled code
CMD ["node", "dist/index.js"]
