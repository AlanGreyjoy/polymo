"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Player {
    constructor() {
        this.GetPlayerInfo = (data) => { };
        this.GetPlayerCharacters = (data) => {
            console.log("get player chars");
            console.log(data);
            // Using mock data instead of database query
            return Promise.resolve([
                {
                    id: "char1",
                    name: "Character 1",
                    level: 10,
                    class: "Warrior",
                },
                {
                    id: "char2",
                    name: "Character 2",
                    level: 5,
                    class: "Mage",
                },
            ]);
        };
        this.Update = (data) => {
            console.log("Update Player");
            console.log(data);
            if (data.username === "") {
                return;
            }
            // Mock implementation - will be replaced with Supabase
            console.log(`Updated player ${data.Username} to offline status`);
        };
        this.GetLastPOS = (data) => { };
        this.player = {};
        this.characters = [];
        this.friends = [];
    }
}
exports.default = Player;
//# sourceMappingURL=Player.js.map