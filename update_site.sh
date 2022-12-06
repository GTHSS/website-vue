#!/bin/bash

echo 'Fixing perms'
sudo chown -R ivan /var/www/html

echo 'Getting to base dir.'
cd /var/www/html

echo 'Pulling code changes.'
sudo -u ivan git pull

echo 'Installing Node Package Manager packages...'
sudo -u ivan npm install

echo 'Packing into new site.'
sudo -u ivan npm run build

echo 'Own Back LOL'
sudo chown -R www-data /var/www/html