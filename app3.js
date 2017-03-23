var express = require('express');
var app = express();

// 路径
var _routeStr = ['start'];

var _routeList = ['<ol>'];
_routeList.push('<li>/a/（匹配任何路径中含有 a 的路径');
_routeList.push('<li>/.*fly$/（匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等）</li>');
_routeList.push('</ol>');


app.all('*', function (req, res, next) {
	console.log('Accessing：' + new Date());
	_routeStr = ['start'];
	next();
});


// 匹配任何路径中含有 a 的路径：
app.get(/a/, function(req, res, next) {
  _routeStr.push('/a/');
  next();
});

// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
app.get(/.*fly$/, function(req, res, next) {
  _routeStr.push('/.*fly$/');
  next();
});

app.get('*', function(req, res) {
	_routeStr.push('end');

	var _html = '<p>' + _routeStr.join('  ====>  ') + '</p>';

	res.send(_routeList.join('') + _html);
});


var server = app.listen(12345, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});