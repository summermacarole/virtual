var client=require('./client');
client.rpush('testlists','a');
client.rpush('testlists','b');
client.rpush('testlists','c');
client.rpush('testlists',1);

client.lrange('testlists',0,-1,function(err,v){
	console.log('err '+err+' v '+v)
})