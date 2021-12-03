const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const userRouter = require('./routes/user/user.js')

app.get('/', (req, res)=> {
    res.send('hello world')
})
app.use('/user', userRouter)

app.get('*', (req, res)=> {
    res.send('Error 404')
})


app.listen(port)