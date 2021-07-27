const express=require('express')
const multer=require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
   
const upload=multer({storage:storage})

const router=express.Router()
const Subscriber=require('../models/subscriber')
const User=require('../models/user')
const getSubscriber=require('../operations/functions')

const validateTask=require('../middlewares/validate')

const {getTasks, getUsers,getTasksByID,addTasks, updateTasks, deleteTasks,deleteUser,Adduser,getTaskByIDcom,getTaskByNamecom,gettaskby,getImage}= require('../controllers/task')

router.route('/').get(getTasks).post(addTasks)
router.route('/:id').get(getTasksByID).put(updateTasks).delete(deleteTasks)
router.route('/addnewuser').post(Adduser)
router.route('/getusers').get(getUsers)
router.route('/deleteuser/:id').delete(deleteUser)
router.route('/combo/:id').get(getTaskByIDcom)
router.route('/combowithname/:name').get(getTaskByNamecom)
router.route('/combo/:id').get(gettaskby)
router.route('/image').post(upload.single('new'),getImage)



//router.get('/',getTasks)
//router.get('/:id',getSubscriber,getTasksByID)
//router.post('/',addTasks)
//router.patch('/:id', getSubscriber,updateTasks)
//router.delete('/:id', getSubscriber,deleteTasks)


module.exports =router