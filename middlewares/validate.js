const Joi=require('joi')
const taskSchema = Joi.object({
    IDnumber:Joi.number().required(),
    task:Joi.string().required()
})

const validateTask=(req,res,next)=>{
    let {error} = taskSchema.validate(req.body)
    if(error){
        return res.status(400).send(error.details[0].message)
    }
    else{
        next()
    }
}

module.exports={validateTask}