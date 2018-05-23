#!/bin/bash

_save-master() {
  local stash_saved
  docker-compose stop
  sudo chown -R mors:mors ./
  [[ -d ./public ]] && sudo rm -rf ./public && sudo rm --rf ../public
  docker-compose run --rm app gatsby build --prefix-paths
  sudo chown -R mors:mors ./

  mv ./public ./tmp-public
  git checkout master

  sudo chown -R mors:mors ./

  sudo cp -rf ./tmp-public/* ./public/

  sudo chown -R mors:mors ./

  git add ./public

  git commit -m "Updating site"

  git push origin master

  git checkout dev 

  sudo chown -R mors:mors ./


  # Restow the build
  # stow -R public
  # stow -t $(pwd)/et-the-fog -R public

  # git add -A && git commit -am "Save new build to master on $(date +"%Y-%m-%d")"
  # git push origin master

  # git checkout dev
  # git stash list && echo "Recovering save from stash..." && git stash pop
}

_save-master
