var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'www.usho.cn',
  user     : 'usho',
  password : '85121608',
  database : 'usho'
});

connection.connect();

connection.query('select u.* from user limit 100', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].name);
});

connection.end();