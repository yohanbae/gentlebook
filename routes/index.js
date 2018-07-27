var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/*
router.get('/hohos/', function(req, res){
	var responseObject = { message:'ok' };
	res.send(responseObject);
});
*/
module.exports = router;
