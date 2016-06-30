var httpProxy = require('http-proxy')

var proxyOptions = {
    router: {
        'localhost/scoreQuery/': '127.0.0.1:88',
        //'localhost/scoreChange/': '127.0.0.1:88',
        //'localhost/loadPage/': '127.0.0.1:88',
        //'localhost/test/': '127.0.0.1:88',
        'localhost':'218.205.81.12',
        
		// 'localhost': '192.168.8.50'

        // 'localhost/mytodo/': '127.0.0.1:9000',
        // 'localhost/ems': '127.0.0.1:8080/ems',
        // 'localhost': '127.0.0.1'
    }
}

 var proxyServer = httpProxy.createServer(proxyOptions)
 proxyServer.listen(80, function(err) {
     console.log('local anti-proxy server listening on port 80')
 })