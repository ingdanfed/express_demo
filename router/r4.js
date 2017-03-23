var express = require('express');
var router = express.Router();

// 该路由使用的中间件
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// 无效，可能是版本问题
// router.param(['id', 'page'], function (req, res, next, value) {
//   console.log('CALLED ONLY ONCE with', value);
//   next();
// })


router.param('nid', function (req, res, next, value) {
  console.log('nid：', value);
  next();
});

router.param('page', function (req, res, next, value) {
  console.log('page：', value);
  next();
});

router.get('/news/:nid/:page', function (req, res, next) {
  console.log('although this matches');
  next();
});

router.get('/news/:nid/:page', function (req, res) {
  console.log('and this matches too');
  res.send('ok');
});

module.exports = router;