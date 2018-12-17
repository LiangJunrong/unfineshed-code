var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'node'
});

connection.connect();

connection.query('SELECT * FROM user', function (err, res) {
  if (err) throw err;
  console.log(res);
});

connection.end();