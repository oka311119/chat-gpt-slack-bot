.PHONY: deploy run-offline

deploy:
	serverless deploy --stage dev

local:
	serverless offline --noPrependStageInUrl && ngrok http 3000