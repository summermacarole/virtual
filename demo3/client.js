var redis=require('redis');
module.exports=client=redis.createClient(6379,'localhost');
// client.set('name','macarole');
// client.get('name',function(err,v){
// 	console.log('name is:'+v+' err is:'+err)
// })