var express = require('express');
var nodeExcel = require('excel-export');
var app = express();

app.get('/excel', function(req, res) {
  var conf = {};
  //conf.stylesXmlFile = "styles.xml";
  conf.cols = [{
    caption: 'string',
    type: 'string',
    width: 28
  }, {
    caption: 'string',
    type: 'string',
    width: 28
  }, {
    caption: 'string',
    type: 'string',
    width: 28
  }, {
    caption: 'string',
    type: 'string',
    width: 28
  }];


  conf.rows = [];

  for (var i = 0; i <= 60000; i++) {
    conf.rows[i] = [];
    for (var j = 0; j <= 3; j++) {
      conf.rows[i][j] = 'data' + j;
    };
  }

  // conf.rows = [
  //   ['pi', new Date(Date.UTC(2013, 4, 1)), true, 3.14],
  //   ["e", new Date(2012, 4, 1), false, 2.7182],
  //   ["M&M<>'", new Date(Date.UTC(2013, 6, 9)), false, 1.2]
  // ];
  var result = nodeExcel.execute(conf);
  res.setHeader('Content-Type', 'application/vnd.openxmlformats');
  res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
  res.end(result, 'binary');
});

app.listen(3000);
console.log('Listening on port 3000');
