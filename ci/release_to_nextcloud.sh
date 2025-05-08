#!/bin/bash

SIGNATURE=`openssl dgst -sha512 -sign pdf_tailor.key pdf_tailor.tar.gz | openssl enc -A -base64`

app_version=$(cat new_version)

echo "Releasing the app v$app_version to the nextcloud app store."

curl -X POST -H 'Content-Type: application/json' -H "Authorization: Token $nextcloud_appstore_token" -d '{ "download": "https://github.com/janis91/pdf_tailor/releases/download/'"$app_version"'/pdf_tailor.tar.gz", "signature": "'"$SIGNATURE"'", "nightly": true }' https://apps.nextcloud.com/api/v1/apps/releases
