const mongoose = require('mongoose')
const { Schema } = mongoose

const restarauntSchema = new Schema({
  name: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  cuisines: String,
  pic: {type: String, default: "/images/fiya.jpg"},
  comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
  
})

const Restraunts = mongoose.model('Raunt', restarauntSchema)

module.exports = Restraunts