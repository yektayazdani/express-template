const express = require('express')
const router = express.Router()
const {getAllUsers} = require('../controllers/userController')

router.get('/', (req, res) => {
    console.log('Main GET endpoint was initiated')
    const users = getAllUsers()
    res.send(`main get endpoint was called ${users}`)
})
router.get('/:id', (req, res) => res.send())

router.post('/', (req, res) => {
    //do something here ...
    console.log('Request Received by POST Endpoint. ', req.body)
    res.json({message: 'received request body ' + req.body })
})
router.put('/:id', (req, res) => res.send())
router.delete('/:id', (req, res) => res.send())


module.exports = {
    router
}