/**
 * Created by w4lle on 16-5-27.
 */

//fs.stat()可以获取文件信息

let fs = require('fs');
const FILENAME = 'sample.txt';

fs.stat(FILENAME, function (err, stat) {
    if (err) {
        console.log(err);
    }else {
        console.log('isFile : ' + stat.isFile());

        console.log('isDir : ' + stat.isDirectory());
        
        if (stat.isFile()) {
            console.log('file size : ' + stat.size);
            console.log('birth time : ' + stat.birthtime);
            console.log('modified time : ' + stat.mtime);
        }
    }
});

/*
output :

isFile : true
isDir : false
file size : 40
birth time : Fri May 27 2016 15:23:37 GMT+0800 (CST)
modified time : Fri May 27 2016 15:23:37 GMT+0800 (CST)
*/

