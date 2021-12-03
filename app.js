const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res)=> {
    res.send('hello world')
})

app.get('*', (req, res)=> {
    res.send('Error 404')
})

app.listen(port)