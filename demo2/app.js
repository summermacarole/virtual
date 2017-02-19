var express=require('express');
var bodyParser=require('body-parser');



var app=express();
var user=require('./routes/users.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}))
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.send('欢迎光临我的网站，这是首页')
	console.log(req)
})

app.use('/user',user);

app.listen(80);

