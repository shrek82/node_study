var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'zuaa',
  charset:'UTF8_GENERAL_CI'
});

connection.connect();

connection.query('select * from zuaa_mail', function(err, rows, fields) {
  if (err) throw err;
  console.log('total:'+rows.length);
  console.log(rows[0]['id']);
  console.log(rows[0]['username']);
  console.log(rows[0]['password']);
});

connection.end();
