var mongoose=require('mongoose')
var db=require('./connect.js');
db();
// mongoose.connect('mongodb://localhost/part10');
var User=mongoose.model('User',{
	name:{
		type:'String',
		default:'new user',
		trim:true
	},
	blog:{
		type:String,
		default:'https://.....',
		set:function(url){
			if(!url){
				return url;
			}
			if(url.indexOf('http://')!=0&&url.indexOf('https://')!=0){
				return 'https://'+url;
			}else{
				return url;
			}
		}
	},
	zone:{
		type:String,
		get:function(url){
			if(!url) return url;
			if(url.indexOf('http://')!=0&&url.indexOf('https://')!=0){
				url='https://'+url;
			}
			return url;
		}
	}
})

var user=new User({
	name:'     我的地址已经带上了前缀的话   ',
	blog:'https://baidu.com',
	zone:'www.qq.com'
})

user.save(function(err){
	if(err){
		console.log('save error')
	}
	
	User.findOne({'zone':'www.qq.com'},function(err,user){
	if(err) {
		console.log('error')
		return;
	}
	console.log('users:',user.zone)
})
})


