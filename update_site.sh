#!/bin/bash

echo 'Getting inside dir.'
cd /var/www/html

echo 'Pulling code changes.'
sudo git pull

echo 'Packing into new site.'
sudo npm run build