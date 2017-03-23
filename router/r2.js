var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// 一个中间件栈，显示任何指向 /user/:id 的 HTTP 请求的信息
router.use('/user/:id', function(req, res, next) {
	console.log('Request URL:', req.originalUrl);
	next();
}, function (req, res, next) {
	console.log('Request Type:', req.method);
	next();
});

// 一个中间件栈，处理指向 /user/:id 的 GET 请求
router.get('/user/:id', function (req, res, next) {
	console.log(req.params, req.params.id == 0);
  // 如果 user id 为 0, 跳到下一个路由
  if (req.params.id == 0){
  	res.send('ID：' + req.params.id);
  }
  // 负责将控制权交给栈中下一个中间件
  else{
  	next();
  }
}, function (req, res, next) {
	// 渲染常规页面
	res.send('next function ID：' + req.params.id);

	// 填到下一个路由
	// next();
});



module.exports = router;