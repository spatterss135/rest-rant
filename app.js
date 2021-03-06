const express = require('express')
const mongoose =  require('mongoose')
const app = express()
require('dotenv').config()
const port = process.env.PORT

const methodOverride = require('method-override')
// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}))
// app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

mongoose.connect(process.env.MONGO_URI, () => console.log("Connected to DB"))

app.get('/', (req, res)=> {
    res.render('Home')
})

const placesRouter = require('./controllers/placesController.js')
const commentsRouter = require('./controllers/commentsController.js')
app.use('/places', placesRouter)
app.use('/comments', commentsRouter)

app.get('*', (req, res)=> {
    res.render('Error404')
})


// let commentSeed = require('./seeders/commentsSeed')

app.listen(port)