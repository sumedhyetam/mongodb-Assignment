const mongoose=require('mongoose')
const Subscriber=require('../models/subscriber')

const {getSubscriber}=require('../operations/functions')

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


module.exports={getTasks,getTasksByID,addTasks, updateTasks, deleteTasks}