#!/bin/bash

export DOCKER_BUILDKIT=1
docker-compose -f compose.yml up --build
