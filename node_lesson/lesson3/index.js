let express = require('express');
let superagent = require('superagent');
let cheerio = require('cheerio');
let fs = require('fs');

let target = 'http://cnodejs.org';
var iterms = [];

const TARGET_FILE = 'output.txt';

let app = express();

function writeFile(data) {
    let ws = fs.createWriteStream(TARGET_FILE, 'utf-8');
    ws.write('开始写数据');
    console.log(data);
    data.forEach((elem, id, array) => {
        console.log('id :' + id + ", elem : " + elem.title);
        ws.write(elem.title + '\n');
        ws.write(elem.href + '\n');
    });
    ws.end();
}

function getUserName(s) {
    return s.substring(s.lastIndexOf('/') + 1);
}

app.get('/', (req, res, next) => {
    console.log('开始抓取' + target);
    superagent.get(target)
        .end((err, sres) => {
            if (err) {
                return next(err);
            }

            // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
            // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
            // 剩下就都是 jquery 的内容了
            let $ = cheerio.load(sres.text);
            //# ->id  . -> class
            $('#topic_list .cell').each((id, element) => {
                let $element = $(element);
                iterms.push({
                    user : getUserName($element.find('.user_avatar').attr('href')),
                    title: target + $element.find('.topic_title').attr('title'),
                    href: target + $element.find('.topic_title').attr('href')
                });
            });
            writeFile(iterms);
            res.send(iterms);
        });
});

app.listen(3000, () => {
    console.log('app is listenning at port 3000');
});

