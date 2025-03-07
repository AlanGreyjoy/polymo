"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (socket, player) => {
    socket.on("getPlayerInfo", (data) => {
        // Implementation for getPlayerInfo
    });
    socket.on("getPlayerCharacters", function (data) {
        player
            .GetPlayerCharacters(data)
            .then((result) => {
            player.characters = result;
            socket.emit("returnPlayerCharacters", player);
        })
            .catch((err) => {
            console.log(err);
        });
    });
};
//# sourceMappingURL=Player.Controller.js.map