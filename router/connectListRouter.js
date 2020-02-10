let express = require('express')
let router = express.Router()
const {connectListController} =require('../controller')

router.get('/getconnectlist',connectListController.getConnection)
router.post('/addconnectlist',connectListController.addConnection)
router.delete('/deleteconnectlist',connectListController.deleteConnection)

module.exports=router