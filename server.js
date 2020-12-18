var https = require('https');
var fs = require('fs');
var options = {
  key: fs.readFileSync('./server-key.pem'),
  ca: [fs.readFileSync('./cert.pem')],
  cert: fs.readFileSync('./server-cert.pem')
};
https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(3443,'127.0.0.1');

