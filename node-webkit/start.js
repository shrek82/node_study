var debug = require('debug')('express');
var app = require('./app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);

  if (typeof(window)!='undefined' && window.location.href.indexOf('localhost') < 0) {
    window.location = 'http://localhost:'+app.get('port')+'/';
  }
});