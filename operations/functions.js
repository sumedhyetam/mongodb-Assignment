const Subscriber=require('../models/subscriber')
const User=require('../models/user')

async function getSubscriber(id){
    let subscriber
    try{
        subscriber =await Subscriber.findById(id)
        if (subscriber == null){
            return
        }
    }
    catch (err) {
        return 
    }
    return subscriber;
    
}


module.exports={getSubscriber}