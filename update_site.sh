#!/bin/bash

echo 'Getting inside dir.'
cd /var/www/html

echo 'Pulling code changes.'
git pull

echo 'Installing Node Package Manager packages...'
npm install

echo 'Packing into new site.'
npm run build