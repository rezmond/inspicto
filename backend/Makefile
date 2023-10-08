build-dev:
	docker build -t inspicto-dev:1 --file="Dockerfile.dev" ./
run-dev:
	docker run --rm -it --user $(shell id -u):$(shell id -g) --volume="$(shell pwd):/usr/src/app" -p 3000:3000 inspicto-dev:1