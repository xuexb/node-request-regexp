node-request-regexp
===================

> 一个正则请求过滤器
> 
> 扩展于 `request`


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
    } else {
        console.log(body);//body为解析正则后的数组
    }
});
```

## change log

### 1.0.2

* 添加文档
* 添加demo

