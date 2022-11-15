#!/bin/bash

echo 'Getting to base dir.'
cd /var/www/

# Chown all files under html folder. Verbose and Recursively.
echo 'chown to current user.'
sudo chown $(whoami) html/ -v -R

echo 'Getting inside dir.'
cd html/

echo 'Pulling code changes.'
git pull

echo 'Installing Node Package Manager packages...'
npm install

echo 'Packing into new site.'
npm run build