module.exports = io =>{
    //Connection per socket connection
    io.on('connection',function (socket) {

        //Auth
        let player = require('./Controllers/Auth.Controller')(socket)

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
}