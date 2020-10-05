const models = require('../models/index')
const User = models.User
const Character = models.Character

exports.GetPlayerCharacters = (socket, data) => {
    console.log('GetPlayerCharacters')
    console.log(data)
    User.findOne({
        where:{
            id: data.id
        }
    }).then(userFound => {
        Character.findAll({
            where:{
                UserId: userFound.id
            }
        }).then(chars=>{
            console.log(chars)
           // socket.emit('returnPlayerCharacters', chars)
        }).catch(error=>{
            console.log(error)
        })
    }).catch(error=>{
        console.log(error)
    })
}