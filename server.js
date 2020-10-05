let app = require('express')
let server = require('http').Server(app)
let io = require('socket.io')(server)

server.listen(3000)

require('./Controllers/Socket.Controller')(io)