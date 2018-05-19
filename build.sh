#!/bin/bash
docker-compose stop
[[ -d ./public ]] && rm -rf ./public
docker-compose run --rm app gatsby build
git stash && git checkout master
sudo cp -rf ./public/* ./
sudo chown -R mors:mors ./
git add . && git commit -am "Update"
git push origin master
git checkout lu/main/code
