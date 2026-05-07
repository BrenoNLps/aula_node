const express = require('express')
const cors = require('cors')
const server = express()

server.set('view engine', 'ejs')
server.use(express.static('public'))
server.use(express.json())
server.use(cors())
server.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
})
server.use(require('./routes'))
module.exports = server
