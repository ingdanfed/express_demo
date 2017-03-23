var express = require('express');
var app = express();



app.use(express.static(__dirname + '/images'));
app.use('/pic', express.static(__dirname + '/images'));
app.use('/img', express.static(__dirname + '/images'));



app.get('/img', function (req, res) {
	var _html = '';

	_html += '<p>/icon.png</p><img src="/icon.png" />';
	_html += '<p>/pic/icon.png</p><img src="/pic/icon.png" />';
	_html += '<p>/img/icon.png</p><img src="/img/icon.png" />';

	res.send(_html);
});


var server = app.listen(12345, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});