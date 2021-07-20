require('dotenv').config()

const mongoose =require('mongoose')
const express=require('express')
const app=express()
mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser:true },{ useUnifiedTopology: true })
const db=mongoose.connection
db.on('error',(error) => console.error(error))
db.once('open',() => console.log('CONNECTED TO DATABASE'))

//const subscribersSchema=require('./models/subscriber')
//const connectToMongoDB= async () => {
    //await mongo().then( async mongoose=> {
   //     try {
         //   console.log('connected to mongodb!')
        
       // const user={
           // IDnumber:5,
          //  task:'sing'
     //   }
     //   console.log(user);
      //  await new subscribersSchema(user).save()
    //}
        //finally{
      //      mongoose.connection.close()
    //    }
  //  })
//}
//connectToMongoDB()

app.use(express.json())
const subscribersRouter=require('./routes/subscribers')
app.use('/subscribers',subscribersRouter)

app.listen(9000, () => console.log('server started'))
