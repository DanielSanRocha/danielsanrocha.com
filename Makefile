.PHONY: help

NODE_VERSION = 18.20.0

help: ## Show this help.
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

_nvm: ## Private command
	. ${NVM_DIR}/nvm.sh && nvm use $(NODE_VERSION) && $(CMD)

setup: ## Install dependencies
	make _nvm CMD="yarn install"

dev: ## Start development server
	make _nvm CMD="yarn dev"

build: ## Build dist folder
	make _nvm CMD="yarn generate"

clean: ## Delete generated dist folder
	yarn clean

super-clean: ## Delete all temp files including node_modules
	rm -rf node_modules || true
	rm -rf .nuxt || true
	rm -rf yarn.lock || true
