var express = require('express');
var app = express();

// 路径
var _routeStr = ['start'];

var _routeList = ['<ol>'];
_routeList.push('<li>ab?cd（匹配 acd 和 abcd）</li>');
_routeList.push('<li>ab+cd（匹配 abcd、abbcd、abbbcd等）</li>');
_routeList.push('<li>ab*cd（匹配 abcd、abxcd、abRABDOMcd、ab123cd等）</li>');
_routeList.push('<li>ab(cd)?e（匹配 /abe 和 /abcde）</li>');
_routeList.push('</ol>');


app.all('*', function (req, res, next) {
	console.log('Accessing：' + new Date());
	_routeStr = ['start'];
	next();
});


// 匹配 acd 和 abcd
app.get('/ab?cd', function(req, res, next) {
  // res.send('ab?cd');
  _routeStr.push('ab?cd');
  next();
});

// 匹配 abcd、abbcd、abbbcd等
app.get('/ab+cd', function(req, res, next) {
  // res.send('ab+cd');
  
  _routeStr.push('ab+cd');
  next();
});

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
app.get('/ab*cd', function(req, res, next) {
  // res.send('ab*cd');
  _routeStr.push('ab*cd');
  next();
});

// 匹配 /abe 和 /abcde
app.get('/ab(cd)?e', function(req, res, next) {
 // res.send('ab(cd)?e');
 _routeStr.push('ab(cd)?e');
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