/**
 * Created by w4lle on 16-5-27.
 */
'use strict'

let http = require('http');

let server = http.createServer(function (request, response) {
    //回调函数接收request和response对象,获得http请求的method和url
    console.log(request.method + ': ' + request.url);
    //将http相应200写入response
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1> Hello node.js</h1>');
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');
