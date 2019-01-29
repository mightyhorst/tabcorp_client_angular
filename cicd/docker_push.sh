#!/bin/bash
DOCKER_IMAGE=superlogical/tabcorp_client_angular:$TRAVIS_BUILD_NUMBER

docker build -t $DOCKER_IMAGE .
echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push $DOCKER_IMAGE 