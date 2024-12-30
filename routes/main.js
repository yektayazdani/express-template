const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log('Main GET endpoint was initiated')
    res.send(`main get endpoint was called`)
})
router.get('/:id', (req, res) => res.send())
router.post('/', (req, res) => {
    //do something here ...
    console.log('Request Received by POST Endpoint. ', req.body)
    res.send(`received data .... ${req.body}`)
})
router.put('/:id', (req, res) => res.send())
router.delete('/:id', (req, res) => res.send())


module.exports = {
    router
}