const mongoose = require('mongoose')
 const subscriberSchema= mongoose.Schema({
     IDnumber:Number,
     task:String
 })
  
 module.exports=mongoose.model('Subscriber', subscriberSchema)