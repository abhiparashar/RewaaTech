const express = require('express')
const bodyParser = require('body-parser')
const authRoute = require('./routes/auth')

const app = express()

app.use(express.json())

app.use('/api/v1/auth',authRoute)

const port = process.env.PORT || 6500

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`)
})