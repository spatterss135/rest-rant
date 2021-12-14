const mongoose = require('mongoose')
const { Schema } = mongoose

const restarauntSchema = new Schema({
  name: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  cuisines: String,
  pic: {type: String, default: "/images/fiya.jpg"}
  
})

const Restraunts = mongoose.model('raunts', restarauntSchema)

module.exports = Restraunts