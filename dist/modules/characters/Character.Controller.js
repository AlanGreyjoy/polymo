"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (socket, player, character) => {
    socket.on("updatePosition", function (data) {
        console.log(data);
        character.Name = data.Name;
        character.Position.x = data.Location.x;
        character.Position.y = data.Location.y;
        character.Position.z = data.Location.z;
        character.Rotation.x = data.Rotation.x;
        character.Rotation.y = data.Rotation.y;
        character.Rotation.z = data.Rotation.z;
        socket.broadcast.emit("updatePosition", character);
        console.log("broadcast updatePosition");
    });
    socket.on("enterWorld", function (data) {
        character.Name = data.name;
        character.Level = data.level;
        character.Type = data.Type;
        character.Money.gold = data.gold;
        character.Money.silver = data.silver;
        character.Money.bronze = data.bronze;
        socket.emit("spawn", player);
    });
    socket.on("createCharacter", function (data) {
        character.Create(data, socket);
    });
};
//# sourceMappingURL=Character.Controller.js.map