const mongoose = require('mongoose')
const { Schema } = mongoose

const commentSchema = new Schema({
  author: {type: String, default: "Anonymous"},
  rant: {type: Boolean, required: true},
  stars: {
    type: Number, 
    required: true, 
    min: 1,
    max: 5},
  content: {type: String, default: ''}
  
})

const Comments = mongoose.model('Comment', commentSchema)

module.exports = Comments