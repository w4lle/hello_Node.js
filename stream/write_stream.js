/**
 * Created by w4lle on 16-5-27.
 */
'use strict'

let fs = require('fs');
const FILENAME1 = 'output.txt';
const FILENAME2 = 'outpurt2.txt';
const DECODE = 'utf-8';

let ws1 = fs.createWriteStream(FILENAME1, DECODE);
ws1.write('use stream write file....\n');
ws1.write('end');
ws1.end();

let ws2 = fs.createWriteStream(FILENAME2);
ws2.write(new Buffer('使用stream写入二进制数据...\n'), DECODE);
ws2.write(new Buffer('end.'), DECODE);
ws2.end();


//所有可以读取数据的流都继承自stream.Readable，所有可以写入的流都继承自stream.Writable。
