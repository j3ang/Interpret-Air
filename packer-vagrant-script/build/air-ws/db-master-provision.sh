#!/bin/bash
# sudo apt-get update

sudo /bin/sed -i "s/security/#security/g" /etc/mongod.conf
sudo /bin/sed -i "s/  authorization/#/g" /etc/mongod.conf

sudo systemctl start mongod
sudo systemctl status mongod
/usr/bin/mongod --nojournal & while ! nc -vz localhost 27017; do sleep 1; done
sudo /usr/bin/mongo admin  -u root -p $MONGO_ROOTPASS --eval 'db.isMaster() '
sudo /usr/bin/mongo admin  -u root -p $MONGO_ROOTPASS --eval 'rs.add({ host: "secondary:27017", priority: 0, votes: 0 })'


# -u "root" -p $MONGO_ROOTPASS --authenticationDatabase "admin" --host $AIR_DB_IP
