CURRENT_DIR=$(patsubst %/,%,$(dir $(realpath $(firstword $(MAKEFILE_LIST)))))
ROOT_DIR=$(CURRENT_DIR)
CURRENT_USER=
DOCKER_NAME=foodcare_front
DOCKER_COMPOSE?=docker-compose
DOCKER_EXEC_TOOLS_APP=$(CURRENT_USER) docker exec -it $(DOCKER_NAME) sh
NODE_INSTALL="npm i"
SERVER_RUN="npm run dev"
SERVER_BUILD="npm run build"


down:
	$(DOCKER_COMPOSE) down

build:
	$(DOCKER_COMPOSE) up --build --no-recreate -d


install:
	$(DOCKER_EXEC_TOOLS_APP) -c $(NODE_INSTALL)


dev:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_RUN)


up:
	$(DOCKER_COMPOSE) up -d

server_build:
	$(DOCKER_EXEC_TOOLS_APP) -c $(SERVER_BUILD)

neat_place:
	$(DOCKER_EXEC_TOOLS_APP) -c "rm -rf dist && rm -rf src/css && mkdir src/css && touch src/css/index.css"

install_new: install_sass install_toast

toasty: install_toast

start: up dev

uppy: build install dev

first: down build install dev

npm_build: server_build

nassim_style: neat_place install_sass run_sass

stop:	$(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) kill || true
	$(DOCKER_COMPOSE) rm --force || true


restart: stop start dev


clear: stop	$(ROOT_DIR)/docker-compose.yml
	$(DOCKER_COMPOSE) down -v --remove-orphans || true