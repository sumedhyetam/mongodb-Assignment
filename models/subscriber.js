const mongoose = require('mongoose')
 const subscriberSchema= mongoose.Schema({
     IDnumber:Number,
     task:String
 },{
     timestamps:true
 })
  const Subscriber=mongoose.model('Subscriber', subscriberSchema)
 module.exports={Subscriber}