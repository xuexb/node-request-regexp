var request = require('./lib/request-regexp');

request({
    url: 'http://www.qq.com/',
    encoding: 'gb2312',
    regexp: {
        title: '<title>(.+?)</title>',
        keyword: '<meta content="(.+?)" name="Keywords">',
        description: '<meta name="description" content="(.+?)" />'
    }
}, function(error, response, body) {
    if (error) {
        console(error.message);
    } else {
        console.log(body);
    }
});