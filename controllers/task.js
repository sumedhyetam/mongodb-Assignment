const mongoose=require('mongoose')
const {Subscriber}=require('../models/subscriber')
const {User}=require('../models/user')
const {getSubscriber}=require('../operations/functions')
const {Image}=require('../models/image')
console.log(Subscriber);
const getTasks= async (req,res) =>
{
try{
    const subscribers= await Subscriber.find()
    res.json(subscribers)
}
catch(err){
    res.status(500).json({message:err.message})
}
}

const getUsers =async (req,res) =>
{
    try{
        const users=await User.find()
        res.json(users)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const getTasksByID = async (req,res) =>
{
    const task =await getSubscriber(req.params.id)
    res.json(task)
}

const addTasks=async (req,res) =>
{
    const subscriber=new Subscriber({
        IDnumber:req.body.IDnumber,
        task:req.body.task
    })
    try{
        const newSubscriber =await subscriber.save()
        res.status(201).json(newSubscriber)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
const Adduser = async (req,res) => 
{
    const userinfo=new User({
        IDnumber:req.body.IDnumber,
        Name:req.body.Name,
        MobileNumber:req.body.MobileNumber
    })
    try{
        const users= await userinfo.save()
        res.status(201).json(users)
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}
 
const updateTasks=async (req,res) =>
{
    const data = await getSubscriber(req.params.id)
try{
    if(req.body.IDnumber != null){
        data.IDnumber =req.body.IDnumber
    }
    if(req.body.task != null){
        data.task =req.body.task
    }
      const updatedSubscriber=await data.save()
        res.json(updatedSubscriber)
    }catch(err) {
        res.status(400).json({message:err.message})
    }
}

const deleteTasks=async (req,res) =>
{
    const task =await getSubscriber(req.params.id)

    try{
await task.remove()
res.json({message:'Deleted Subscriber'})
    }
    catch(err) {
res.status(500).json({message:err.message})
    }
    
}

const deleteUser=async (req,res) => 
{
    const user =await User.findById(req.params.id)
    try {
        if(!user) return res.end('id dont exist')
        await user.remove()
        res.json({message:'deleted the task'})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const getTaskByIDcom= async (req,res)=>
{
    const result=await User.aggregate([{
       $lookup:{
            from:"subscribers",
           localField:"IDnumber",
            foreignField:"IDnumber",
            as:"combination"
        }}
     
    ,{
     $match: {
 "combination.IDnumber":parseInt(req.params.id)
     }
    },{$sort:{"combination.updatedAt":-1}}]).project({_id:0,MobileNumber:0,Name:0,createdAt:0,"combination._id":0})

    res.json(result)
    
}

const getTaskByNamecom= async (req,res)=>
{
    const result=await User.aggregate([{
       $lookup:{
            from:"subscribers",
           localField:"IDnumber",
            foreignField:"IDnumber",
            as:"combination"
        }}
     
    ,{
     $match: {
 Name:req.params.name
     }
    }]).project({_id:0,MobileNumber:0,createdAt:0,"combination.createdAt":0,"combination._id":0}).sort({"updatedAt":-1})

    res.json(result)
    
}
const gettaskby=async (req,res)=>
{
    const result=await Subscriber.aggregate([
        {$sort:{"createdAt":-1}}
    ])
    res.json(result)
}

const getImage= async(req,res)=>
{
  
    res.json('successful')
    console.log(req.file)
    const imageDetails=new Image({
        ProductImage:req.file.originalname
    })
    console.log(imageDetails)
    imageDetails.save();
    
    
    
}


module.exports={getTasks, getUsers,getTasksByID,addTasks, updateTasks, deleteTasks,deleteUser,Adduser,getTaskByIDcom,getTaskByNamecom,gettaskby,getImage}