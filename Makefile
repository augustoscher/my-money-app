.PHONY: help run stop rebuild

.DEFAULT: help
help:
	@echo "make run"
	@echo "       starts the application"
	@echo "make run-logs"
	@echo "       starts the application with logs"
	@echo "make stop"
	@echo "       stops the application"
	@echo "make rebuild"
	@echo "       rebuild and start the application"
	@echo "make setup"
	@echo "       install dependencies"
	
	
run: stop
	docker-compose up -d
	@echo "Application Running on 0.0.0.0:8080"

run-logs: stop
	docker-compose up -d && docker-compose logs -f -t
	@echo "Application Running on 0.0.0.0:8080"

stop:
	docker-compose down
	@echo "Stoped running the application."

rebuild: stop
	docker-compose up -d --build
	@echo "Application Running on 0.0.0.0:8080"

setup:
	yarn --force

