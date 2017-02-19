var mongoose=require('mongoose');
require('./model.js');
//获取一个model
var Book=mongoose.model('Book');
//Book的实例
var book=new Book({
	name:'mean web',
	author:'green',
	publishTime:new Date()
})
//或者在初始化以后一个个赋值
// book.name='lucy';
book.save(function(err){
	console.log('save status:',err?'fail':'success')
})