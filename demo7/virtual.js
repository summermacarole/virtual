var mongoose=require('mongoose')
var db=require('./connect.js')
db();

var PersonSchema=mongoose.Schema({
	firstName:{
		type:String,
		default:'jack',
		index:true
	},
	lastName:{
		type:String,
		default:'bone',
		index:true,
	}
})
PersonSchema.virtual('fullName').get(function(){
	return this.firstName+this.lastName;
})
	PersonSchema.set('toJson',{getters:true,virtual:true})

var Person=mongoose.model('Person',PersonSchema);

var person=new Person({
	firstName:'mary',
	lastName:'book'
})

// person.save(function(err){
// 	if(err){
// 		console.log('save error')
// 	}
// 	console.log('save ok')

// })

Person.findOne({},function(err,person){
	if(err){
		console.log('find error')
	}
	console.log('person:',person.fullName)
})