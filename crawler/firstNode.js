var server,
    port = 8080,
    http = require('http'),
    url = require('url');

server = http.createServer(function (req,res){
    path = url.parse(req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    switch (path.pathname) {
        case '/':
            res.end('hello world');
            break;
        case '/index':
            res.end('index page');
        default:
            res.end('path.pathname='+path.pathname);
            break;
    }
    // res.end('Hello world\n');

    console.log('guest visted');

}).listen(port);
console.log('Server is running');