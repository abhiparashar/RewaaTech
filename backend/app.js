const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())

const db = mysql.createConnection({
    connectionLimit:10,
    host:'localhost',
    user:'root',
    password:'password',
    database:'rewaa',
    insecureAuth : true
})

db.getConnection = function(err,connection){
    if(err){
        console.log('connection not established')
    }
    else{
        connection.release()
    }
}

app.post('/api/v1/auth/signin',(req,res)=>{
    const username = req.body.username
    const password = req.body.password
    db.query("SELECT * FROM users WHERE username=? AND PASSWORD = ?",[username,password],(err,result)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(result)
        }
    })
})



const port = process.env.PORT || 6500

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})