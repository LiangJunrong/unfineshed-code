const express = require('jsliang-node');
console.log(express);
console.log(express());
console.log(express().get);
const app = express();

app.get('/', (req, res) => {
  res.send('Hello jsliang Node!');
});

app.listen(3000, () => {
  console.log('正在监听 3000 端口');
});