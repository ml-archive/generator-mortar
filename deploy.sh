#!/bin/bash

# Copy the appropriate config
cp src/config/base-config.js src/config/base-config.local.js
rm src/config/base-config.js
cp src/config/base-config.${1}.js src/config/base-config.js

# Run grunt build command.
grunt build

# The dist is now built, we can return to local configuration
rm src/config/base-config.js
cp src/config/base-config.local.js src/config/base-config.js

if [ "$1" = "prod" ]
then
    BUCKET=""
else
    BUCKET="cms${1}.ymvp.fuzzhq.com"
fi

echo "Deploying to ${BUCKET}"

## Deploy to AWS
aws s3 sync dist/ s3://${BUCKET} --profile ymvp --acl public-read
