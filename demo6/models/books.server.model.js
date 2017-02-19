var mongoose=require('mongoose');
var BookSchema=mongoose.Schema({
	name:String,
	author:String,
	price:Number,
	publishTime:Date,
})

mongoose.model('Book',BookSchema);