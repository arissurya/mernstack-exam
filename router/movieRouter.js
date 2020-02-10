let express = require('express')
let router = express.Router()
const {movieController} =require('../controller')

router.get('/getmovie',movieController.getMovie)
router.post('/addmovie',movieController.addMovie)
router.put('/updatemovie/:id',movieController.updateMovie)
router.delete('/deletemovie/:id',movieController.deleteMovie)

module.exports=router