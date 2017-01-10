var express = require('express');
var router = express.Router();
var userDao = require('userDao');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//登录用户注册模块
router.use('/userreg', function(req, res, next) {
	console.log('用户注册 comming.....1  ' + req.body.username +' ' +req.body.userid);
	//进行user的初始化。
	var userdao = new userDao();
	userdao.fun['init'](req)
		.then(userdao.fun['insert'])
		.done(function(suc){
			userdao.fun['close']();
			console.log('hello world');
			res.render('regsuccess', { title: 'Express' });
		},function(err){console.log(err + 'error')});
	
});
//用户注册页面
router.use('/kangkang', function(req, res, next) {
  console.log('control comming');
  res.render('control', { title: 'Express' });
});
module.exports = router;
