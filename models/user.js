const mongoose = require('mongoose')
 const userSchema= mongoose.Schema({
     IDnumber:Number,
     Name:String,
     MobileNumber:Number
 },{
     timestamps:true
 })
  const User=mongoose.model('User',userSchema)
 module.exports={User}