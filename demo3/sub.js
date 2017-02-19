var client=require('./client');
client.subscribe('testMessage');
client.on('message',function(channel,message){
	console.log('我当前监听的是：'+channel+',消息是：'+message)
})