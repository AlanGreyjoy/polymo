let shortId = require('shortid')

module.exports = class Resource {
    constructor() {
        this.id = shortId.generate()
        this.name = ''
        this.description = ''
        this.total = 0
        this.type = ''
        this.cooldown = 0
    }
}