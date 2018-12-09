// 引入 http 模块
var http = require('http');

http.createServer( (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset='utf-8'"
  });
  res.write("Hello World!");
  // 结束响应
  res.end();
}).listen(8080);