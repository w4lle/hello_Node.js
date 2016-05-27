/**
 * Created by w4lle on 16-5-27.
 */

'use strict'

let fs = require('fs');
const FILENAME = 'sample.txt';

console.log('-----begin------');

//异步读取文件
fs.readFile(FILENAME, 'utf-8', function (err, data) {
    if (err) {
        console.log(err);
    }else {
        console.log(data);
    }
});

console.log('-----end------');


/**
 output ::


 -----begin------
 -----end------

 text node js module

 this is js module;
 */




//同步读取文件
try {
    let syncData = fs.readFileSync(FILENAME, 'utf-8');
    console.log(syncData);
} catch (e) {
    //出错了
    console.log(e);
}

