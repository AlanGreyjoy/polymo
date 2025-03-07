"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (socket, player, character) => {
    socket.on("disconnect", function () {
        console.log("A peer disconnected!");
        /*
         *  Implement various player/character disconnects that are not flagged as "logouts"
         * */
        socket.broadcast.emit("disconnected", player); // Tell everyone who disconnected
    });
};
//# sourceMappingURL=Disconnect.Controller.js.map