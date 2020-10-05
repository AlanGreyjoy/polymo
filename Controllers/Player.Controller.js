
module.exports = (socket, player) => {

    socket.on('getPlayerInfo', (data)=>{

    })

    socket.on('getPlayerCharacters', function (data) {
        player.GetPlayerCharacters(data).then(result => {
            player.characters = result
            socket.emit('returnPlayerCharacters', player)
        }).catch(err => {
            console.log(err)
        });
    })

}