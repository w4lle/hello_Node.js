//写文件

'use strict'

const FILENAME = 'output.txt';
let fs = require('fs');
let data = 'Hello, node.js';


//异步写文件
console.log('write file async begin');
fs.writeFile(FILENAME, data, function (err) {
    if (err) {
        console.log(err);
    }else {
        console.log('write ok');
    }
});
console.log('write file async end');

/**
 * output 
 * 
 * 
 * write file async begin
 write file async end
 write ok

 */



//同步写文件
console.log('write file sync begin');
fs.writeFileSync(FILENAME, 'write file sync ok');
console.log('write file sync end');
