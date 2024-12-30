
const express = require('express')
const {commonHeaders} = require('./middleware/common')
const {router} = require('./routes/main')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use(commonHeaders)

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server Started listening to port ${PORT}`)
})