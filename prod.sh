#!/bin/bash

# Go to the directory where your Vue project is located
cd /home/ec2-user/portfolio/

# Pull changes from origin/main branch
git pull origin main

# Install dependencies and build the production files
npm run build

# Remove old dist folder
sudo rm -r /var/www/html/dist

# Move the production files to /var/www/html/
sudo cp -r /home/ec2-user/portfolio/dist /var/www/html/