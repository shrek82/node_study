var express = require('express');
var mysql = require('node-mysql');
var ejs = require('ejs');
var nodeExcel = require('excel-export');
var app = express();

//设置模板引擎
app.set("view engine","ejs");

// 一个简单的 logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

app.use(express.logger());
app.use('/static', express.static(__dirname + '/public'));

//应用首页
app.get("/",function(req,res) {
  res.render("index",{"title":"test"});
});

app.get('/hello', function (req, res) {
  var body = 'Hello World';
  res.setHeader('Content-Type', 'text/html');
  res.send(body);
});

app.listen(3000);
console.log('Listening on port 3000');