#!/bin/bash

_save-master() {
  local stash_saved
  docker-compose stop
  [[ -d ./public ]] && rm -rf ./public
  docker-compose run --rm app gatsby build
  sudo chown -R mors:mors ./

  echo "Clearing git stash!"
  git stash clear && git stash

  git checkout master
  sudo cp -rf ./public/* ./
  sudo chown -R mors:mors ./
  git add . && git commit -am "Update"
  git push origin master

  git checkout lu/main/code
  git stash list && echo "Recovering save from stash..." && git stash pop
}

_save-master
