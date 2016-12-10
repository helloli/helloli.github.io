const http = require('http');
const fs = require('fs');
const hostname = '127.0.0.1';
const port = 9000;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Cache-control': 'max-age=30'
    });
    fs.readFile(__dirname + '/index.html', function (err, data) {
        res.end(data);
    });
}).listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});