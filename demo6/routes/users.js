var express = require('express');
var router = express.Router();

var mongoose=require('mongoose');
var Book=mongoose.model('Book');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/add',function(req,res,next){
	var book=new Book({
		name:'三国演义',
		author:'吴承恩',
		price:45,
		publishTime:new Date()
	})
	book.save(function(err){
		if(err){
			res.end('数据保存失败');
			return next();
		}
		Book.find({},function(err,books){
			if(err){
				res.end('找书错误了');
				return next()
			}
			res.json(books)
		})
	})
})
module.exports = router;
