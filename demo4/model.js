var mongoose=require('mongoose');
var uri='mongodb://username:password@hostname:port/databasenaem';
uri='mongodb://localhost/part9';

//连接数据库
mongoose.connect(uri);
//定义一个Schema
var BookSchema=mongoose.Schema({
	name:String,
	author:String,
	publishTime:Date
});

//建立一个model
mongoose.model('Book',BookSchema)