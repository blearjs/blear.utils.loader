/**
 * 测试 文件
 * @author ydr.me
 * @create 2016-05-17 12:13
 */


'use strict';

var loader = require('../src/index.js');

describe('index.js', function () {
    it('.js', function (done) {
        loader.js({
            url: '//cdn.bootcss.com/jquery/1.2.3/jquery.min.js',
            timeout: 5000
        }, function (err) {
            if (!err) {
                expect(window.jQuery).not.toBe(undefined);
            }

            done();
        });
    }, 5000);


    it('.css', function (done) {
        loader.css({
            url: 'https://at.alicdn.com/t/font_536737_dvwpun81ta10pb9.css',
            timeout: 5000,
            destroy: false
        }, function (err) {
            if (!err) {
                expect(this.href).not.toBe(undefined);
            }

            done();
        });
    });


    it('.img', function (done) {
        loader.img({
            url: '/',
            timeout: 5000,
            destroy: false
        }, function (err) {
            expect(err).not.toBe(null);

            done();
        });
    }, 5000);

    it('.img abort', function (done) {
        var ld = loader.img({
            url: 'https://abs.twimg.com/b/front_page/v1/JP_ASIA_2.jpg?' + Math.random(),
            timeout: 5000,
            destroy: false
        }, function (err) {
            expect(err).not.toBe(null);

            done();
        });

        ld.abort();
    });

    it('.img timeout', function (done) {
        loader.img({
            url: 'https://abs.twimg.com/b/front_page/v1/JP_ASIA_2.jpg?' + Math.random(),
            timeout: 1,
            destroy: false
        }, function (err) {
            expect(err).not.toBe(null);

            done();
        });
    });

    it('.img string', function (done) {
        var ld = loader.img('https://abs.twimg.com/b/front_page/v1/JP_ASIA_2.jpg?' + Math.random(), function (err) {
            expect(err).not.toBe(null);

            done();
        });

        ld.abort();
    });
});
