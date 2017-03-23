var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});


var _pid;

router.get('/blog/:pid', function (req, res, next) {
	console.log('get function');
});


router.param('pid', function (req, res, next, pid){
	console.log('param function');
	// console.log(req.query);

	setTimeout(function(){
		_pid = pid;

		res.send('my pid is：' + pid + '&&' + req.query.id);
	}, 1000);

	next();
});




module.exports = router;