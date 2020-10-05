let app = require('express')
let server = require('http').Server(app)
let io = require('socket.io')(server)

server.listen(3000)

const Auth = require('./Classes/Auth')
let Player = require('./Classes/Player')
let Character = require('./Classes/Character')
let PlayerController = require('./Controllers/Player.Controller')


let players = []
let sockets = []

//Connection per socket connection
io.on('connection',function (socket) {
    let shortId = require('shortid')
    console.log('connection made')
    console.log(shortId.generate())
    socket.emit('register', {id: shortId.generate()})

    const player = new Player()
    const character = new Character()

    socket.on('login', function (data) {
        Auth.Login(data).then(result=>{
            player.user = result.user
            socket.emit('loginSuccess', result)
        })
    })

    socket.on('enterWorld', function (data) {
        character.Name = data.name
        character.Level = data.level
        character.Type = data.Type
        character.Money.gold = data.gold
        character.Money.silver = data.silver
        character.Money.bronze = data.bronze
        socket.emit("spawn", player)
    })

    socket.on('getPlayerCharacters', function (data) {
        player.GetPlayerCharacters(data).then(result=>{
            player.characters = result
            socket.emit('returnPlayerCharacters', player)
        })
    })

    socket.on('createCharacter', function (data) {
        character.Create(data, socket)
    })

    socket.on('updatePosition', function (data) {
        console.log(data);
        character.Name = data.Name
        character.Position.x = data.Location.x
        character.Position.y = data.Location.y
        character.Position.z = data.Location.z

        character.Rotation.x = data.Rotation.x
        character.Rotation.y = data.Rotation.y
        character.Rotation.z = data.Rotation.z

        io.emit('updatePosition', character)
        console.log('broadcast updatePosition')

    })

    socket.on('disconnect', function () {
        console.log('A player disconnected!')
        //delete players[thisPlayerId]
        //delete sockets[thisPlayerId]
        //player.Update(player)
        socket.broadcast.emit("disconnected", player); //Tell everyone who disconnected
    })

})