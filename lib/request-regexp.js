var request = require('request');
var iconv = require('iconv-lite');

module.exports = function (options, callback) {
    'use strict';

    var reg;
    var is_gb2312 = false;

    if ('string' === typeof options) {
        options = {
            url: options
        };
    }

    // charset is BG2312
    if (options.encoding === 'gb2312') {
        options.encoding = null;
        is_gb2312 = true;
    }

    // RegExp
    reg = options.regexp;

    callback = callback || function () {};

    return request(options, function (error, response, body) {
        var result = {};
        var key;
        var temp;

        // Transcoding
        if (is_gb2312) {
            body = iconv.decode(body, 'gb2312').toString();
        }

        // no RegExp
        if (!reg) {
            return callback(error, response, result);
        }

        if (error) {
            callback(error, response, result);
        }
        else {
            if (response.statusCode === 200) {
                temp = {};

                // 先全局匹配
                Object.keys(reg).forEach(function (value) {
                    temp[value] = body.match(new RegExp(reg[value], 'g')) || [];
                });

                // Find every and additional
                Object.keys(temp).forEach(function (value) {
                    result[value] = [];
                    temp[value].forEach(function (str) {
                        result[value].push((str.match(new RegExp(reg[value])) || ['']).slice(1));
                    });
                });

                callback(error, response, result);
            }
            else {
                callback(error, response, result);
            }
        }

    });
};
