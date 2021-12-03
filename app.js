const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT

app.get('/', (req, res)=> {
    res.send('hello world')
})

app.listen(port)