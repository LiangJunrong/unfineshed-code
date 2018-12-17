var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node'
});

connection.connect();

let readSql = "SELECT * FROM user";

connection.query(readSql, function (err, res) {
  if (err) throw err;
  console.log(res);
});

connection.end();