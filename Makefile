default: help

.PHONY: all
all: hugo dev clean

clean:
	rm -rf public node_modules .hugo-build.lock

issues: ## Find all the FIXMEs
	grep -ri "FIXME" content/en/

hugo: ## Build the hugo site for CI
	npm ci
	hugo --minify

dev: ## Run the local server
	hugo serve .

.PHONY: help
help:  ## 🤔 Show help messages for make targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'
