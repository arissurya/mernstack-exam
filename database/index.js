var mysql = require('mysql')
const db = mysql.createConnection({
    user:'root',
    password:'root',
    database:'moviepurwadhika',
    host:'localhost'
})

module.exports=db