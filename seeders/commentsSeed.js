let Place = require('../models/places')
let Comment = require('../models/comments')


console.log('Hi')

// To use await, we need an async function.
async function seed() {
    
    // Get the place, H-Thai-ML
    let place = await Place.findOne({'name': 'Burger King'})
    console.log(place.comments)
    // Create a fake sample comment.
    let comment = await Comment.create({
        author: 'Mi Amigo',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended!'
    })

    // // Add that comment to the place's comment array.
    console.log(comment.id)
    place.comments.push(comment.id)
    place.save()
    // // Exit the program
    
}

seed()