/**
 * Created by w4lle on 16-5-27.
 */
'use strict'

let fs = require('fs');

let rs = fs.createReadStream('sample.txt');
let ws = fs.createWriteStream('copied.txt');

rs.pipe(ws);
