let Faction = require('./Faction')
let models = require('../models/index')
let Character = models.Character

module.exports = class Player {
    constructor() {
        this.player = {}
        this.characters = []
        this.friends = []
    }

    GetPlayerInfo = (data) => {

    }

    GetPlayerCharacters = (data) => {
        console.log('get player chars')
        console.log(data)
        return new Promise((resolve => {
            Character.findAll({
                where:{
                    PlayerId: data.id
                }
            }).then(chars=>{
                return resolve(chars)
            }).catch(error=>{
                console.log(error)
                return []
            })
        }))
    }

    Update = (data) => {
        console.log('Update Player')
        console.log(data)
        if(data.username === ''){
            return
        }
        User.findOne({
            where:{
                Username: data.Username
            }
        }).then(found=>{
            found.Online = false
            found.update()
        }).catch(error=>{
            console.log(error)
        })
    }

    GetLastPOS = (data) => {

    }
}