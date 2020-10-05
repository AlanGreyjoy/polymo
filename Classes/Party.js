let shortId = require('shortid')

module.exports = class Party {
    constructor() {
        this.id = shortId.generate()
        this.name = ''
        this.players = []
    }
}