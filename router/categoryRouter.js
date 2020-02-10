let express = require('express')
let router = express.Router()
const {categoryController} =require('../controller')

router.get('/getcategory',categoryController.getCategory)
router.post('/addcategory',categoryController.addCategory)
router.put('/updatecategory/:id',categoryController.updateCategory)
router.delete('/deletecategory/:id',categoryController.deleteCategory)

module.exports=router