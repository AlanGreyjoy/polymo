let Player = require('../Classes/Player')
let Character = require('../Classes/Character')

module.exports = io =>{
    io.on('connection',function (socket) {

        console.log('peer connected')

        let player = new Player()
        let character = new Character()

        //Auth
        require('../Controllers/Auth.Controller')(socket, player)

        //Players
        require('../Controllers/Player.Controller')(socket, player)

        //Characters
        require('../Controllers/Character.Controller')(socket, player, character)

        //Handle Disconnects
        require('../Controllers/Disconnect.Controller')(socket, player, character)

    })
}