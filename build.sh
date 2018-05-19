#!/bin/bash

_save-master() {
  local stash_saved
  docker-compose stop
  [[ -d ./public ]] && rm -rf ./public
  docker-compose run --rm app gatsby build
  git stash && stash_saved=true
  git checkout master
  sudo cp -rf ./public/* ./
  sudo chown -R mors:mors ./
  git add . && git commit -am "Update"
  git push origin master
  git checkout lu/main/code
  [ -z ${stash_saved+x} ] || git stash pop
}

_save-master
