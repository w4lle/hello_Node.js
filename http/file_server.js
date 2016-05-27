/**
 * Created by w4lle on 16-5-27.
 *
 * a simple http server
 */
'use strict'
let fs = require('fs');
let url = require('url');
let path = require('path');
let http = require('http');

//根据命令行参数获取root目录,默认当前目录
let root = path.resolve(process.argv[2] || './static/');

console.log('Static root dir : ' + root);

let server = http.createServer(function (request, response) {
    //获得url的path
    let pathName = url.parse(request.url).pathname;
    let location = url.parse(request.url).href;
    //获得对应本地文件路径
    let filePath = path.join(root, pathName);
    fs.stat(filePath, function (err, stats) {
        if (!err) {
            if (stats.isFile()) {
                console.log('200 ' + request.url);
                response.writeHead(200);
                fs.createReadStream(filePath).pipe(response);
            } else {
                fs.readdir(filePath, function(err, files){
                    if (err) {
                        console.log("no files found in this dir!");
                    } else {
                        console.log("list all files and dirs!");
                        let list = '<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8" /><title>Document</title></head><body>';
                        for (let file of files) {
                            var filepath = path.join(location, file);
                            list += '<a href="' + filepath + '">' + file + '</a><br />';
                        }
                        list += '</body></html>';
                        response.end(list);
                    }
                });
            }
        } else {
            console.log('404 ' + request.url);
            response.writeHead('404');
            response.end('404 Not Found');
        }
    });
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080');
