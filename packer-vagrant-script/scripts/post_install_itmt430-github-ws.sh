#!/usr/bin/env bash

#Abort script at first error, when a command exits with non-zero status
#(except in until or while loops, if-tests, list constructs)
set -e
#Echoes all commands before executing.
set -v

# http://superuser.com/questions/196848/how-do-i-create-an-administrator-user-on-ubuntu
# http://unix.stackexchange.com/questions/1416/redirecting-stdout-to-a-file-you-dont-have-write-permission-on
# This line assumes the user you created in the preseed directory is vagrant
echo "%admin  ALL=NOPASSWD: ALL" | sudo tee -a /etc/sudoers.d/init-users
sudo groupadd admin
sudo usermod -a -G admin vagrant


# set the /etc/hosts file to match hostname
echo "$AIR_WS_IP     ws  ws.sat.iit.edu" | sudo tee -a /etc/hosts

# changing system wide environment variables
sudo su
sudo echo AIR_WS_IP="$AIR_WS_IP" >> /etc/environment
sudo echo AIR_DB_IP="$AIR_DB_IP" >> /etc/environment
sudo echo MONGO_DB="$MONGO_DB" >> /etc/environment
sudo echo MONGO_USERNAME="$MONGO_USERNAME" >> /etc/environment
sudo echo MONGO_USERPASS="$MONGO_USERPASS" >> /etc/environment
sudo echo ACCESSFROMIP="$ACCESSFROMIP" >> /etc/environment
sudo echo MONGO_ROOTPASS="$MONGO_ROOTPASS" >> /etc/environment
cat /etc/environment > /etc/nenvironment

. /etc/environment
# -----------------Done------------------

# Packages
NODE="nodejs"
BUILD_ESSENTIAL="build-essential"
MONGO="mongodb-org"
GIT="git"

#Install necessary packages
sudo apt-get update
echo "----------------------"
# Prerequisites
  echo "Installing GIT"
  sudo apt-get install -y $GIT
  echo "Git Installed"

# Install Node.js 8.x (librb5-dev fix node-gyp issue)
  echo "Installing Nodejs"
  curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
  sudo apt-get install $NODE -y
  sudo apt-get install $BUILD_ESSENTIAL -y
  node -v
  npm -v
  sudo npm i -g npm
  # Nodejs installed
  # -----------------Done------------------

# Install Angular/Cli (curretn 1.7.3)
  sudo apt-get install libkrb5-dev -y
  sudo apt-get update
  echo "Installing Angualr/Cli"
  # https://github.com/angular/angular-cli/issues/6800 (fix node-gyp issue)
  sudo npm i -g --unsafe-perm @angular/cli
# -----------------Done------------------

# MongoDB 3.6
  echo "Installing MongoDB"
  sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
  echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
  sudo apt-get update
  sudo apt-get install -y $MONGO
  echo "MongoDB Installed"

# Bash-It beatify your terminal ;)
# https://github.com/Bash-it/bash-it
  echo "Installing bash-it"
  echo "https://github.com/Bash-it/bash-it"
  git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it
  yes | ~/.bash_it/install.sh
# -----------------Done------------------

# Installing vagrant keys
  echo "installing vagrant keys"
  wget --no-check-certificate 'https://raw.github.com/mitchellh/vagrant/master/keys/vagrant.pub'
  #sudo mkdir -p /home/vagrant/.ssh
  sudo chown -R vagrant:vagrant /home/vagrant/.ssh
  cat ./vagrant.pub >> /home/vagrant/.ssh/authorized_keys
  sudo chown -R vagrant:vagrant /home/vagrant/.ssh/authorized_keys
  echo "Done!"
  # -----------------Done------------------

#http://www.fail2ban.org/wiki/index.php/MANUAL_0_8#Jails
  echo "Installing fail2ban"
  sudo sed -i "s/bantime = 600/bantime = -1/g" /etc/fail2ban/jail.conf
  sudo systemctl enable fail2ban
  sudo service fail2ban restart
  echo "Done!"
  # -----------------Done------------------

# enable and allow ports in firewall
# https://serverfault.com/questions/790143/ufw-enable-requires-y-prompt-how-to-automate-with-bash-script
  echo "Set up firewall rules"
  ufw --force enable
  #allow ssh
  ufw allow proto tcp to 0.0.0.0/0 port 22
  #allow webserver
  ufw allow proto tcp to 0.0.0.0/0 port 80
  #allow https
  ufw allow proto tcp to 0.0.0.0/0 port 443
  #allow mongoDB
  ufw allow proto tcp to 0.0.0.0/0 port 27017

  ufw allow 27017
  # port forwarding 80 to 8080 for host machine to access
  ufw allow 8080
  # nodejs server port
  ufw allow 3000
  # angular ng serve port
  ufw allow 4200
  echo "Done!"
# -----------------All Done!------------------
