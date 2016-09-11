const http = require('http');

http.createServer( (request, response) => {
  response.writeHead(200, {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'});
    var search_result = [
        {
            name: '化肥厂'
        }, {
            name: '玻璃厂'
        }
    ];
  response.end(JSON.stringify(search_result));
}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');