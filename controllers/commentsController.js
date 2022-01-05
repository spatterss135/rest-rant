const express = require('express')
const comment = express.Router()
const placesObjects = require('../models/places')
const Comments = require('../models/comments')


comment.get('/:id', async (req, res) => {
    let place = await placesObjects.findById(req.params.id)
    res.render('Comment', {place: place})
})

comment.post('/:id', async (req, res) => {
    
    if (req.body.rant === 'on') {
        req.body.rant = true
    }
    else {
        req.body.rant = false
    }
    req.body.stars = Number(req.body.stars)
    let comment = await Comments.create(req.body)
    let place = await placesObjects.findById(req.params.id)
    place.comments.push(comment.id)
    place.save()
    res.redirect('/places')

})



module.exports = comment