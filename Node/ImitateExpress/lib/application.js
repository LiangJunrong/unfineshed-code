const http = require("http");
const url = require("url");

// 应用程序类
const Application = () => {
  // 用来保存路由的数组
  this.stack = [
    {
      path: "*",
      method: "*",
      handle: (req, res) => {
        res.writeHead(200, {
          "Content-Type": "text/plain"
        });
        res.end("404");
      }
    }
  ]
}

// 在 Application 的原型上扩展 get 方法，以便 Application 的实例具有该方法
Application.prototype.get = (path, handle) => {
  // 将请求路由押入栈内
  this.stack.push({
    path,
    method: "GET",
    handle
  })
}

// 在 Application 的原型上扩展 listen 方法，以便 Application 的实例具有该方法
Application.prototype.listen = () => {
  const server = http.createServer( (req, res) => {
    
    // 扩展 res 的方法，让其支持 send 方法
    if(!res.send) {  
      res.send = (body) => {
        res.writeHead(200, {
          "Content-Type": "text/plain"
        });
        res.end(body);
      }
    }

    // 循环请求过来放入 router 数组的对象，当请求方法和路径与对象一致时，执行回调 handler 方法
    for(let i = 1, len = this.stack.length; i < len; i++) {
      if((req.url === this.stack[i].path || this.stack[i].path === "*") && (req.method === this.stack[i].method || req.stack[i].method === "*")) {
        return this.stack[i].handle && this.stack[i].handle(req, res);
      }
    }

    return this.stack[0].handle && this.stack[0].handle(res, res);

  })

  return server.listen.apply(server, arguments);

}

module.exports = Application;