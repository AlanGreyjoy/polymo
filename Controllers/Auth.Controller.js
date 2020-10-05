let Auth = require('../Classes/Auth')
let Character = require('../Classes/Character')

module.exports = (socket, player) =>{

    //this is just to keep track of when I program OUTSIDE the socket on accident.
    let shortId = require('shortid')
    socket.emit('register', {id: shortId.generate()})

    /**
     * Login
     */
    socket.on('login', function (data) {
        Auth.Login(data).then(result=>{
            player.player = result.player
            socket.emit('loginSuccess', result)
        }).catch(err=>{
            console.log(err)
        })
    })

    /**
     * Logout
     */
    socket.on('logout', (data)=>{

    })

}