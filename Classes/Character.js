const models = require("../models/index")
const User = models.User
const CharacterModel = models.Character

module.exports = class Character{
    constructor() {
        this.Name = ''
        this.Level = ''
        this.Type = ''
        this.IsFlying = false
        this.IsMounted = false
        this.Online = false
        this.WorldId = false
        this.Money = {
            gold: 0,
            silver: 0,
            bronze: 0
        }
        this.Position = {
            x: 0,
            y: 0,
            z: 0
        }
        this.Rotation = {
            x: 0,
            y: 0,
            z: 0
        }
    }

    Create = (data, socket) => {
        console.log('create character')
        console.log(data)
        if(!data.user.username){
            return
        }

        User.findOne({
            where:{
                Username: data.user.username
            }
        }).then(user=>{
            CharacterModel.findOne({
                where:{
                    Name: data.name
                }
            }).then(created=>{
                if(!created){
                    CharacterModel.create({
                        UserId: user.id,
                        Name: data.name,
                        Type: data.type,
                    }).then(characterSave=>{
                        socket.emit("characterCreated", characterSave)
                        return {characterSave}
                    }).catch(error=>{
                        console.log(error)
                    })
                }else{
                    socket.emit('errorMessage', 'A character with that name already exists!')
                }
            }).catch(error=>{
                console.log(error)
            })
        }).catch(error=>{
            console.log(error)
        })
    }

}
