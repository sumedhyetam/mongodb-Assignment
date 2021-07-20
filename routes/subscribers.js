const express=require('express')
const router=express.Router()
const Subscriber=require('../models/subscriber')
const getSubscriber=require('../operations/functions')

const validateTask=require('../middlewares/validate')

const {getTasks,getTasksByID,addTasks, updateTasks, deleteTasks}= require('../controllers/task')

router.route('/').get(getTasks).post(addTasks)
router.route('/:id').get(getTasksByID).put(updateTasks).delete(deleteTasks)

//router.get('/',getTasks)
//router.get('/:id',getSubscriber,getTasksByID)
//router.post('/',addTasks)
//router.patch('/:id', getSubscriber,updateTasks)
//router.delete('/:id', getSubscriber,deleteTasks)


module.exports =router