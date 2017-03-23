var express = require('express');
var app = express();


var _router1 = require('./router/r1.js');
var _router2 = require('./router/r2.js');
var _router3 = require('./router/r3.js');
var _router4 = require('./router/r4.js');


app.use('/', _router1);
app.use('/r2', _router2);
app.use('/r3', _router3);
app.use('/r4', _router4);


var server = app.listen(12345, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});