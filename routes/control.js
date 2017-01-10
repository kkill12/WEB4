var express = require('express');
var router = express.Router();
var userDao = require('userDao');
var session = require('express-session');

console.log('i am comming');
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('control comming');
  res.render('control', { title: 'Express' });
});

router.get('/controlyy', function(req, res, next) {
  console.log('control comming .........');
  req.session.name = 'kangyun';
  req.session.arr = [{name:'kkkk',password:'kkk'}];
  res.render('control', { title: 'Express' });
});

router.get('/controlzz', function(req, res, next) {
  console.log('controlzz comming .........'+req.session.name);
  console.log('controlzz comming .........'+req.session.arr);

  res.render('control', { title: 'Express' });
});
//用户注册页面

module.exports = router;
