let shortId = require('shortid')
let Faction = require('./Faction')

module.exports = class Mob {
    constructor() {
        this.id = shortId.generate()
        this.name = ''
        this.description = ''
        this.worldPosition = ''
        this.worldRotation = ''
        this.level = 1
        this.faction = Faction
    }
}