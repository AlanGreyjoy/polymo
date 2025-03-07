"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor() {
        this.Create = (data, socket) => {
            if (!data.player.username) {
                return;
            }
            // Using mock model instead of actual database
            socket.emit("characterCreated", {
                id: Math.random().toString(36).substring(2, 15),
                PlayerId: Math.random().toString(36).substring(2, 15),
                Name: data.name,
                Type: data.type,
                createdAt: new Date(),
                updatedAt: new Date(),
            });
        };
        this.Name = "";
        this.Level = "";
        this.Type = "";
        this.IsFlying = false;
        this.IsMounted = false;
        this.Online = false;
        this.WorldId = false;
        this.Money = {
            gold: 0,
            silver: 0,
            bronze: 0,
        };
        this.Position = {
            x: 0,
            y: 0,
            z: 0,
        };
        this.Rotation = {
            x: 0,
            y: 0,
            z: 0,
        };
    }
}
exports.default = Character;
//# sourceMappingURL=Character.js.map