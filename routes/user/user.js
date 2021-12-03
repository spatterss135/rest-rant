const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    res.send('User Page')
})

router.get('/:id', (req, res)=> {
    res.send(`User ${req.params.id} Page`)
})

module.exports = router