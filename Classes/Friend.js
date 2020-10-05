let shortId = require('shortid')
let Player = require('./Player')

module.exports = class Friend {
    constructor() {
        this.id = shortId.generate()
        this.player = Player
    }
}