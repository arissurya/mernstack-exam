let express = require('express')
let bodyparser = require('body-parser')
let app = express()
const port = 2020
const {movieRouter,categoryRouter,connectListRouter} = require('./router')

app.use(bodyparser.json())

app.use('/movie',movieRouter)

app.use('/category',categoryRouter)

app.use('/connectlist',connectListRouter)

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Ujian Backend Purwadhika API</h1>")
})

app.listen(port,console.log("App listen to port "+port))