let Player = require('./Classes/Player')
let Character = require('./Classes/Character')

module.exports = socket =>{

    let shortId = require('shortid')
    console.log('connection made')
    socket.emit('register', {id: shortId.generate()})

    const player = new Player()

    socket.on('login', function (data) {
        Auth.Login(data).then(result=>{
            player.user = result.user
            socket.emit('loginSuccess', result)
        })
    })

}