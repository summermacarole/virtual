var mongoose=require('mongoose')
var db=require('./connect.js');

var UserSchema=mongoose.Schema({
	name:{
		type:'String',
		default:'new user'
	},
	regTime:{
		type:'Date',
		default:Date.now
	}
})

var User=mongoose.model('User',UserSchema)

var user=new User({
	name:'macarole'
})

console.log(user);