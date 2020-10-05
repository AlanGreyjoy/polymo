const models = require("../models/index")
const Player = models.Player
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
        if(!data.player.username){
            return
        }
        Player.findOne({
            where:{
                Username: data.player.username
            }
        }).then(player=>{
            CharacterModel.findOne({
                where:{
                    Name: data.name
                }
            }).then(created=>{
                if(!created){
                    CharacterModel.create({
                        PlayerId: player.id,
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
