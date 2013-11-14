var http = require("http");
var officegen = require('officegen');


http.createServer(function(request, response) {

  response.writeHead(200, {
    "Content-Type": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    'Content-disposition': 'attachment; filename=surprise.xlsx'
  });

  var xlsx = officegen('xlsx');

  xlsx.on('finalize', function(written) {
    // ...
  });

  xlsx.on('error', function(err) {
    // ...
  });

  sheet = xlsx.makeNewSheet();
  sheet.name = 'Excel Test';

  // The direct option - two-dimensional array:
  for (var i = 0; i <= 60000; i++) {
    sheet.data[i] = [];
    for (var j = 0; j <= 12; j++) {
        sheet.data[i][j] = 'data'+j;
    };
  }

  // Using setCell:
  // sheet.setCell('E7', 340);
  // sheet.setCell('I1', -3);
  // sheet.setCell('I2', 31.12);
  // sheet.setCell('G102', 'Hello World!');

  xlsx.generate(response);
}).listen(3000);
console.log('server starting 3000...');
