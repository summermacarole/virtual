var express=require('express');
var router=express.Router();


router.get('/',function(req,res){
	res.send('我是user里面的首页')
})
router.get('/list',function(req,res){
	res.send('我是user里面的list');
})
router.get('/about',function(req,res){
	res.send('我是user里面的about')
})
module.exports=router;