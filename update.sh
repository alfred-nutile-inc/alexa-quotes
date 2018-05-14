#!/bin/bash

touch .env

mv .env .env.update

sam package --template-file template.yaml --s3-bucket nutile-alexa --s3-prefix sam-build --output-template-file packaged.yaml
## --parameter-overrides Secret=SECRET
## Left out after initial build
sam deploy --template-file ./packaged.yaml --stack-name alexa-quotes --capabilities CAPABILITY_IAM

mv .env.update .env
