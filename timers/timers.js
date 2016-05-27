/**
 * Created by w4lle on 16-5-27.
 */
'use strict'

console.log('Now : ' + new Date().toTimeString());

/**
 * delay 300s 只执行一次
 */
setTimeout(() => {
    console.log('Run at : ' + new Date().toTimeString());
}, 300);

/**
 * 每500s执行一次
 */
setInterval(() => {
    console.log('Schedule at : ' + new Date().toTimeString());
}, 500);
