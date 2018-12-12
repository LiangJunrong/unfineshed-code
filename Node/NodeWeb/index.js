var http = require('http')

var items = []

http.createServer(function (req, res) {
  // 设置cors跨域
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Content-Type', 'application/json')

  switch (req.method) {
    // 设置了cors跨域
    // post请求时，浏览器会先发一次options请求，如果请求通过，则继续发送正式的post请求
    case 'OPTIONS':
      res.statusCode = 200
      res.end()
      break
    case 'GET':
      let data = JSON.stringify(items)
      res.write(data)
      res.end()
      break
    case 'POST':
      let item = ''
      req.on('data', function (chunk) {
        item += chunk
      })
      req.on('end', function () {
        // 存入
        item = JSON.parse(item)
        items.push(item.item)
        // 返回到客户端
        let data = JSON.stringify(items)
        res.write(data)
        res.end()
      })
      break
  }
}).listen(3000)

console.log('http server is start...')