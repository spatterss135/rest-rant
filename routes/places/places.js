const express = require('express')
const router = express.Router()
const placesObjects = require('../../data/placesObjects')
const fs = require('fs').promises
const util = require('util');


router.get('/', (req, res)=> {
    placesObjects.find().then(placesObjects => {
        res.render('Places', {placesObjects: placesObjects})
    })
    })
    

router.post('/', async (req, res) => {
    fs.access(req.body.pic, fs.R_OK, (err) => {
        console.log('Inside fs')
        if (err) { 
            console.log('Inside err') 
        }
        else {
            console.log('Inside no error')
        }
    });
    
    console.log('get this to run last')
    // placesObjects.create(req.body)
    // res.redirect('/')
})

router.get('/new', (req, res) => {
    res.render('New')
})

router.get('/edit/:id', (req, res) => {
    placesObjects.findById(req.params.id)
    .then(place => {
        res.render('Edit', {place: place, index: req.params.id})
    })
})

router.get('/:id', (req, res)=> {
    placesObjects.findById(req.params.id)
    .then(place => {
        res.render('specificPlace', {place: place, index: req.params.id})
    })
    
})

router.delete('/:id', async (req, res) => {
   const place = await placesObjects.findById(req.params.id)
   placesObjects.deleteOne({name: place.name}, () => console.log('Succ'))
    
    res.status(303).redirect('/places')
})

router.put('/:id', (req, res) => {
    
    placesObjects.updateOne({_id: req.params.id}, {name: req.body.name, city: req.body.city, state: req.body.state, cuisines: req.body.cuisines, pic: req.body.pic}, ()=> console.log('Success'))
    res.status(303).redirect('/places')
})

module.exports = router