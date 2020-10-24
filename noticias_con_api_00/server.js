const express = require('express')

const server = express()

const deportes_extremos = express.static(__dirname + "/docs")

server.use( deportes_extremos )

server.listen(2000)