const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const placesRouter = require('./routes/places/places.js')
// MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res)=> {
    res.send('hello world')
})
app.use('/places', placesRouter)

app.get('*', (req, res)=> {
    res.render('error404')
})


app.listen(port)