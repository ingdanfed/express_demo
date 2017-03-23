var express = require('express');
var app = express();

// 多个回调函数，需指定执行next
app.get('/b', function (req, res, next) {
	console.log('this is function b one');
	next();
}, function (req, res) {
	console.log('this is function b two');

	res.send('Hello from B!');
});


// 多个回调传入，需指定执行next，最后必须有send
var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Hello from C!');
}

app.get('/c', [cb0, cb1, cb2]);


var server = app.listen(12345, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});