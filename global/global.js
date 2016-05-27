/**
 * Created by w4lle on 16-5-27.
 */

console.log('current js file : ' + __filename);

console.log('current dir : ' + __dirname);

process.name = 'Sample Nodejs';

//process.argv存储了命令行参数
console.log('arguments : ' + JSON.stringify(process.argv));

//cwd返回当前目录
console.log('cwd : ' + process.cwd());

//切换当前工作目录
// process.chdir('~/Develop/node.js/');
console.log('cwd : ' + process.cwd());

//process.nextTick将在下一轮事件循环中调用:
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');

process.on('exit', function (code) {
    console.log('about to exit with code : ' + code);
});
