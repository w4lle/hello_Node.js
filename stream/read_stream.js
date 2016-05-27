/**
 * Created by w4lle on 16-5-27.
 */

'use strict'

let fs = require('fs');

const FILENAME = 'sample.txt';
const DECODE = 'utf-8';

//打开一个流:
let rs = fs.createReadStream(FILENAME, DECODE);

rs.on('data', function (chunk) {
    console.log('DATA:');
    console.log(chunk);
});

rs.on('data', function (chunk) {
    console.log('DATA2:');
    console.log(chunk);
});

rs.on('end', function () {
    console.log('end');
});

rs.on('error', function (err) {
    console.log('error : ' + err);
});


/*
output:

    DATA:
        this is used to test node.js stream
end
*/

