
const express = require('express')
const {commonHeaders} = require('./middleware/common')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(commonHeaders)

app.listen(PORT, () => {
    console.log(`Server Started listening to port # ${PORT}`)
})