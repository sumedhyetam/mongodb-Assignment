const mongoose = require('mongoose')
 const ImageSchema= mongoose.Schema({
     ProductImage:{type:String,
    required:true}
 })
  const Image=mongoose.model('Image', ImageSchema)
 module.exports={Image}