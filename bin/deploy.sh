#!/bin/bash

set -e

echo "Adding heroku as git remote"
git remote add heroku ${HEROKU_GIT_URL} || echo "Failed to add remote"

# This is how we authenticate with Heroku without having to run `heroku login`
echo "Writing .netrc file"
cat >~/.netrc <<EOF
machine api.heroku.com
  login ${HEROKU_LOGIN}
  password ${HEROKU_API_KEY}
machine git.heroku.com
  login ${HEROKU_LOGIN}
  password ${HEROKU_API_KEY}
EOF

echo "Deploying site to Heroku"
git push heroku master -f
git remote remove heroku

exit 0