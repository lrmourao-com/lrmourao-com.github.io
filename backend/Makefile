# Makefile for Docker operations

.PHONY: help build run stop restart logs clean dev test

# Default target
help:
	@echo "Available commands:"
	@echo "  make build      - Build production Docker image"
	@echo "  make run        - Run production container"
	@echo "  make dev        - Run development container with hot reload"
	@echo "  make stop       - Stop all containers"
	@echo "  make restart    - Restart containers"
	@echo "  make logs       - View container logs"
	@echo "  make shell      - Open shell in running container"
	@echo "  make test       - Test Docker build and run"
	@echo "  make clean      - Remove containers and images"
	@echo "  make health     - Check container health"

# Build production image
build:
	@echo "Building production Docker image..."
	docker-compose build

# Run production container
run:
	@echo "Starting production container..."
	docker-compose up -d
	@echo "Container started! Check health at http://localhost:3001/health"

# Run development container with hot reload
dev:
	@echo "Starting development container with hot reload..."
	docker-compose -f docker-compose.dev.yml up

# Stop containers
stop:
	@echo "Stopping containers..."
	docker-compose down
	docker-compose -f docker-compose.dev.yml down 2>/dev/null || true

# Restart containers
restart: stop run

# View logs
logs:
	docker-compose logs -f

# Open shell in running container
shell:
	docker-compose exec backend sh

# Test Docker build and health check
test:
	@echo "Testing Docker build..."
	docker build -t backend-test .
	@echo "Starting test container..."
	docker run -d --name backend-test-run -p 3002:3001 \
		-e PORT=3001 \
		-e NODE_ENV=production \
		-e POSTHOG_API_URL=https://app.posthog.com \
		-e POSTHOG_PROJECT_API_KEY=test \
		-e SMTP_HOST=smtp.example.com \
		-e SMTP_PORT=587 \
		-e SMTP_USER=test@example.com \
		-e SMTP_PASS=test \
		-e EMAIL_FROM=test@example.com \
		backend-test
	@echo "Waiting for container to start..."
	@sleep 3
	@echo "Testing health endpoint..."
	@curl -f http://localhost:3002/health && echo "\n✅ Health check passed!" || echo "\n❌ Health check failed!"
	@echo "Cleaning up test container..."
	@docker stop backend-test-run
	@docker rm backend-test-run
	@docker rmi backend-test

# Check container health
health:
	@curl -s http://localhost:3001/health | python3 -m json.tool

# Clean up everything
clean:
	@echo "Cleaning up containers and images..."
	docker-compose down -v
	docker-compose -f docker-compose.dev.yml down -v 2>/dev/null || true
	docker rmi backend-server 2>/dev/null || true
	@echo "Cleanup complete!"

# Quick deploy (build and run)
deploy: build run
	@echo "Deployment complete!"
	@make health



