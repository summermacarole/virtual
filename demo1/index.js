var express=require('express');
var bodyParser=require('body-parser');
var path=require('path');

var user=require('./routes/users.js');
var product=require('./routes/product.js');
var app=express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:false
}))

app.use('/public',express.static(path.join(__dirname,'public')))


app.get('/',function(req,res){
	res.send('我是应用的首页')
})
app.use('/user',user);
app.use('/product',product);

app.listen(80);