#!/bin/bash

echo "Generating self-signed certificates..."

mkdir -p ./config/certificates
KEY_NAME=air-ws
CSR_CONFIG='./scripts/csr_config.cnf'

openssl req -config $CSR_CONFIG -new -newkey rsa:2048  -nodes -keyout ${KEY_NAME}.key -out ${KEY_NAME}.csr
openssl x509 -req -days 365 -in ${KEY_NAME}.csr -signkey ${KEY_NAME}.key -out ${KEY_NAME}.crt

mv air-ws.crt ./config/certificates/${KEY_NAME}.crt
mv air-ws.key ./config/certificates/${KEY_NAME}.key
mv air-ws.csr ./config/certificates/${KEY_NAME}.crs

echo "Generated self-signed certificates at "
echo "./config/certificates/"${KEY_NAME}.crt
echo "./config/certificates/"${KEY_NAME}.key
