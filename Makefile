up:
	docker compose up -d
up-build:
	docker compose up -d --build
up-front:
	docker compose up -d prtf-ui

shell-ui:
	docker compose exec prtf-ui ash
install-ui:
	docker compose exec prtf-ui npm i
run-ui:
	docker compose exec prtf-ui npm run dev
run-story:
	docker compose exec prtf-ui npm run storybook
build-ui:
	docker compose exec prtf-ui npm run build
down:
	docker compose down
