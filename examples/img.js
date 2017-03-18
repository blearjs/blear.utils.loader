/**
 * 文件描述
 * @author ydr.me
 * @create 2017-03-18 16:27
 * @update 2017-03-18 16:27
 */


'use strict';

var loader = require('../src/index');

var url = 'http://www.gov.cn/premier/2017-02/14/5167978/images/8d5c2bd58d634ea28a924843821f2cf0.jpg?' + Math.random();

loader.img(url, function (err, img) {
    console.log(err);
    console.log(img);
});

