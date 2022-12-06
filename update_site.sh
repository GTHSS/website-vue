#!/bin/bash

echo 'Getting to base dir.'
cd /var/www/html

echo 'Pulling code changes.'
sudo git pull

echo 'Installing Node Package Manager packages...'
sudo npm install

echo 'Packing into new site.'
sudo npm run build

echo 'Fixing perms'
sudo chown -R www-data /var/www/html