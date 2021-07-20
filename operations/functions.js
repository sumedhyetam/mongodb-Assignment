const Subscriber=require('../models/subscriber')

async function getSubscriber(id){
    let subscriber
    try{
        subscriber =await Subscriber.findById(id)
        if (subscriber == null){
            return res.status(404).json({message:'cannot find subscriber'})
        }
    }
    catch (err) {
        return res.status(500).json({message:err.message})
    }
    return subscriber;
    
}

module.exports={getSubscriber}