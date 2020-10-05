let Faction = require('./Faction')
let models = require('../models/index')
let User = models.User
let Character = models.Character

module.exports = class Player {
    constructor() {
        this.user = {}
        this.characters = []
        this.money = {
            gold: 0,
            silver: 0,
            bronze: 0
        }
        this.friends = []
        this.worldPosition = {
            x: 0,
            y: 0,
            z: 0
        }
        this.worldRotation = {
            x: 0,
            y: 0,
            z: 0
        }
    }

    GetPlayerCharacters = (data) => {
        return new Promise((resolve => {
            Character.findAll({
                where:{
                    UserId: data.id
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