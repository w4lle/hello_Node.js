/**
 * Created by w4lle on 16-5-30.
 */

let express = require('express');
let utility = require('utility');

let app = express();

app.get('/', (req, res) => {
    let q = req.query.title;

    // 调用 utility.md5 方法，得到 md5 之后的值
    // utility 的 github 地址：https://github.com/node-modules/utility
    let md5Value = utility.md5(q);
    console.log(q + '\'s md5 value is ' + md5Value);
    res.send(md5Value);
});

app.listen(3000, () => {
    console.log('app is running at port 3000');
});
