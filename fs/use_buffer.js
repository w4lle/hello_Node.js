/**
 * Created by w4lle on 16-5-27.
 */
'use strict'

let fs = require('fs');

let data = fs.readFileSync('sample.txt');
console.log(data);
console.log(data.length + 'bytes');
console.log('First thred bytes : ' + data[0] + ',' + data[1] + ', ' + data[2]);

//Buffer -> String 
let text = data.toString('utf-8');
console.log(text);

let buf = new Buffer(text, 'utf-8');
console.log(buf);

/**
 * output
 * 
 * 
 * <Buffer 0a 74 65 78 74 20 6e 6f 64 65 20 6a 73 20 6d 6f 64 75 6c 65 0a 0a 74 68 69 73 20 69 73 20 6a 73 20 6d 6f 64 75 6c 65 3b>
 40bytes
 First thred bytes : 10,116, 101

 text node js module

 this is js module;
 <Buffer 0a 74 65 78 74 20 6e 6f 64 65 20 6a 73 20 6d 6f 64 75 6c 65 0a 0a 74 68 69 73 20 69 73 20 6a 73 20 6d 6f 64 75 6c 65 3b>

 * 
 * 
 */
