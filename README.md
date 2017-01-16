# node-request-regexp

> 基于[request](https://www.npmjs.com/package/request)的一个正则请求过滤器


## install

```shell
$ npm install request-regexp
```

## example
    
```js
var request = require('request-regexp');

request({
    url: 'http://www.qq.com/',
    encoding: 'gb2312',//如果是gb2312编码
    regexp: {//一个正则对象
        title: '<title>(.+?)</title>',
        keyword: '<meta content="(.+?)" name="Keywords">',
        description: '<meta name="description" content="(.+?)" />'
    }
}, function(error, response, body) {
    if (error) {
        console(error.message);
    }
    else {
        // body = {
        //     title: [
        //         匹配数组1,
        //         匹配数组2,
        //     ]
        // }
        console.log(body);
    }
});
```

## change log

### 1.0.3

* 优化文档

### 1.0.2

* 添加文档
* 添加demo

