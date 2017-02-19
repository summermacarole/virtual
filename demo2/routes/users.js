var express=require('express');
var router=express.Router();

router.get('/',function(req,res){
	res.end('user的首页')
})
router.all(/list/,function(req,res){
	res.end('user的list')
})
router.all('/about/:name',function(req,res){
	console.log('user about')
	res.status(500);
	// res.contentType('application/json')
	console.log(__dirname+'/../')
	res.sendFile('/hello.css',{root:__dirname+'/../public'})
})
module.exports=router;