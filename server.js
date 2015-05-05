var express = require('express'),
	app = express();

require('./routes')(app);

app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, function () {

  var host = server.address().address,
  		port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});