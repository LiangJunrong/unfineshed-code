var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node'
});

connection.connect();

let updateSql = "UPDATE user SET name = ?,age = ? WHERE Id = ?";
let updateSqlParams = ["LiangJunrong", "23", 1];

connection.query(updateSql, updateSqlParams, function (err, res) {
  if (err) {
    console.log("修改错误：");
    console.log(err);
    return;
  } else {
    console.log("修改成功：");
    console.log(res);
  }
});

connection.end();