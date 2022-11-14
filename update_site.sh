echo 'Getting inside dir.'

cd /var/www/html

echo 'Pulling code changes.'
git pull

echo 'Packing into new site.'
npm run build