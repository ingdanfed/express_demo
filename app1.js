var express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello World! <a href="/news">to news</a>');
});

app.get('/news', function (req, res) {
	res.send('this is news. <a href="/">back</a>');
}).post('/news', function (req, res) {
	console.log('query：' + req.query);
	console.log('body：' + req.body);
	res.send({
		code: 'abc123',
		msg: 'get a post request!',
		data: req.query
	});
}).put('/news', function (req, res) {
	console.log('query：' + req.query);
	console.log('body：' + req.body);
	res.send({
		code: 'abc123',
		msg: 'get a put request!',
		data: req.query
	});
}).delete('/news', function (req, res) {
	console.log('query：' + req.query);
	console.log('body：' + req.body);
	res.send({
		code: 'abc123',
		msg: 'get a delete request!',
		data: req.query
	});
});


var server = app.listen(12345, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});