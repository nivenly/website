default: help

.PHONY: all
all: submodule hugo dev

issues: ## Find all the FIXMEs
	grep -ri "FIXME" content/en/

submodule: ## Initialize the submodule(s)
	git submodule update --init --recursive

hugo: ## Build the hugo site for CI
	npm ci
	hugo --minify

dev: ## Run the local server
	hugo serve .

new: submodule dev ## Updates and init's the submodule(s) before running hugo server

.PHONY: help
help:  ## 🤔 Show help messages for make targets
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-30s\033[0m %s\n", $$1, $$2}'
