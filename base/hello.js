'use strict'

let s = 'Hello';

let Hi = 'Hi';

function greet(name) {
    console.log(s + ", " + name + "!");
}

function hi(name) {
    console.log(Hi + ', ' + name + '!');
}



//CommonJS规范原理
/*var module = {
    id: 'hello',
    //exports是module的一个空对象
    exports: {}
};

var load = function (exports, module) {
    // 一开始 exports 指向的是 传进来的参数 module.exports
    exports = function () { return 'foo'; };
    // 赋值语句后 只是改变了exports 的指向 试他指向 该匿名函数 而 module.exports还是{} 不变
    return module.exports;
};
var exported = load(module.exports, module);*/


module.exports = {
    greet: greet,
    hi : hi
}
