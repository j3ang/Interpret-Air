sudo apt-get update

cd ..
# Inject env variables for gulp
echo "export const environment = {" > /home/vagrant/2018-itmt430-5/Fresh-UI/generator/angular-src/src/environments/environment.ts
echo '   '"production: false, ">> /home/vagrant/2018-itmt430-5/Fresh-UI/generator/angular-src/src/environments/environment.ts
echo '   '"webserverip:\"$AIR_WS_IP\"" >> /home/vagrant/2018-itmt430-5/Fresh-UI/generator/angular-src/src/environments/environment.ts
echo "}" >> /home/vagrant/2018-itmt430-5/Fresh-UI/generator/angular-src/src/environments/environment.ts

cd /home/vagrant/2018-itmt430-5/Fresh-UI/generator/angular-src
sudo git pull
sudo npm install

cd /home/vagrant/2018-itmt430-5/Fresh-UI/generator/scripts
sudo chmod 744 generate-ssl-certs.sh

cd ..
sudo npm install
sudo npm start
