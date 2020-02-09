#!/bin/bash

# Create release folder
mkdir release

# Copy everything to release folder
cp -R appinfo release/appinfo
cp -R css release/css
cp -R js release/js
cp -R img release/img
cp -R l10n release/l10n
cp -R lib release/lib
cp LICENSE release/LICENSE
cp README.md release/README.md
