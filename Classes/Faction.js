module.exports = class Faction {
    constructor() {
        this.name = ''
        this.description = ''
        this.enemyFactions = []
        this.hostile = false
        this.isNPC = false
        this.isAnimal = false
    }
}