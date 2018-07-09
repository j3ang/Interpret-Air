# Pre-steps to take
In order for the host system to send environment variables to the guest Vm being built you have to explicitly declare them on the command line before you issue a ```packer build``` command.

This is how we are passing passwords/RSA keys securely.

[https://www.packer.io/docs/templates/user-variables.html](https://www.packer.io/docs/templates/user-variables.html)

### What we need to set username and passwords securely in Packer
1) Issue the command inside of the folder, ```cp variables-sample.json variables.json```
    1) The ```variables.json``` file contains key value pairs of variables and passwords to be passed into the provisioner shell script.
    1) This renames the file ```variables-sample.json``` to ```variables.json```  (there is an entry in the .gitignore so you cannot accidentially git push your passwords).
1) Edit the ```variables.json``` file replacing default values with your own    
1) Issue the command ```packer build --var-file=./variables.json ubuntu16044-itmt430-database.json``` and ```packer build --var-file=./variables.json ubuntu16044-itmt430-webserver.json``` to begin the install with password, usernames, and RSA private key properly seeded
    1) This way we can securely build the system, deploy it and when building it pass in passwords via environment variables

### Assigned IP
Alex
 192.168.1.163
 192.168.1.164
 192.168.1.165
 192.168.1.166
Khang
 192.168.1.151
 192.168.1.152
 192.168.1.153
 192.168.1.154
Aury
 192.168.1.147
 192.168.1.148
 192.168.1.149
 192.168.1.150
David
 192.168.1.159
 192.168.1.160
 192.168.1.161
 192.168.1.162
