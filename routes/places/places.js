const express = require('express')
const router = express.Router()

router.get('/', (req, res)=> {
    res.send('Places Page')
})

router.get('/:id', (req, res)=> {
    res.send(`Places ${req.params.id} Page`)
})

module.exports = router