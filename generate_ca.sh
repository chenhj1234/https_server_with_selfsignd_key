openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
openssl genrsa -out server-key.pem 1024
cp /usr/lib/ssl/openssl.cnf .
openssl req -new -key server-key.pem -config openssl.cnf -out server-csr.pem
