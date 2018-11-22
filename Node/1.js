// 1. 引入 http 模块
var http = require("http");

// 2. 用 http 模块创建服务
/**
 * req 获取 url 信息 (request)
 * res 浏览器返回响应信息 (response)
 */
http.createServer(function (req, res) {

  if(req.url != "/favicon.ico") {
    // 地址是：http://localhost:3000/?userName=jsliang&userAge=23
    console.log(req.url);
    /**
     * / 表示根路径，本地启动即是 http://127.0.0.1:3000，如果输入了其他的：/?userName=jsliang&userAge=23
     * /favicon.ico 表示标签页小图标
     */
    // /
    // /favicon.ico
    
    /**
     * 第一个参数是地址
     * 第二个参数是 true 的话表示把 get 传值转换成对象
     */ 
    var result = url.parse(req.url, true);
    console.log(result.query.userName); // jsliang
    console.log(result.query.userAge); // 23
  }

  // 设置 HTTP 头部，状态码是 200，文件类型是 html，字符集是 utf8
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });

  // 往页面打印值
  res.write('<h1 style="text-align:center">Hello NodeJS</h1>');

  // 结束响应
  res.end();

}).listen(3000);


// 3. 引入 url 模块
var url = require("url");

// console.log(url);
/**
 { 
   Url: [Function: Url],
    parse: [Function: urlParse], // 获取地址信息
    resolve: [Function: urlResolve], // 追加或者替换地址
    resolveObject: [Function: urlResolveObject],
    format: [Function: urlFormat], // 逆向 parse，根据地址信息获取原 url 信息
    URL: [Function: URL],
    URLSearchParams: [Function: URLSearchParams],
    domainToASCII: [Function: domainToASCII],
    domainToUnicode: [Function: domainToUnicode] 
  }
 */

// console.log(url.parse("http://www.baidu.com"));
/**
  Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: null,
    query: null,
    pathname: '/',
    path: '/',
    href: 'http://www.baidu.com/' 
  }
 */

// console.log(url.parse("http://www.baidu.com/new?name=zhangsan"));
/**
  Url {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com',
    port: null,
    hostname: 'www.baidu.com',
    hash: null,
    search: '?name=zhangsan',
    query: 'name=zhangsan',
    pathname: '/new',
    path: '/new?name=zhangsan',
    href: 'http://www.baidu.com/new?name=zhangsan' 
  }
 */

// console.log(url.format({
//   protocol: 'http:',
//   slashes: true,
//   auth: null,
//   host: 'www.baidu.com',
//   port: null,
//   hostname: 'www.baidu.com',
//   hash: null,
//   search: '?name=zhangsan',
//   query: 'name=zhangsan',
//   pathname: '/new',
//   path: '/new?name=zhangsan',
//   href: 'http://www.baidu.com/new?name=zhangsan' 
// }))
// http://www.baidu.com/new?name=zhangsan

// console.log(url.resolve("http://www.baidu.com/jsliang", "梁峻荣"));
// http://www.baidu.com/梁峻荣