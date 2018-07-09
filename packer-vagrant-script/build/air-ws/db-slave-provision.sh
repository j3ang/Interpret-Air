#!/bin/bash
# sudo apt-get update

sudo /bin/sed -i "s/security/#security/g" /etc/mongod.conf
sudo /bin/sed -i "s/  authorization/#/g" /etc/mongod.conf

sudo systemctl start mongod
sudo systemctl status mongod
/usr/bin/mongod --nojournal & while ! nc -vz localhost 27017; do sleep 1; done
sudo /usr/bin/mongo admin  -u root -p $MONGO_ROOTPASS --eval 'rs.slaveOk()'

# /usr/bin/mongod --nojournal & while ! nc -vz localhost 27017; do sleep 1; done
# sudo mongo --eval 'db.getMongo().setSlaveOk()'


#MongoDB configuration
#
# bindip to all ip addresses and enable authorization
#
# cp -v /etc/mongodbak.conf  /etc/mongod.conf
# sudo /bin/sed -i "s/127.0.0.1/0.0.0.0/g" /etc/mongod.conf
# sudo /bin/sed -i "s/#security/security/g" /etc/mongod.conf
# sudo sed -i "/security/a \ \ authorization: enabled" /etc/mongod.conf
# sudo cat /etc/mongod.conf > nmongod.conf
# # printf "\nsecurity: \n %s authorization: enabled" >> /etc/mongod.conf
# sudo cat nmongod.conf > /etc/mongod.conf
#


# sudo systemctl restart mongod
