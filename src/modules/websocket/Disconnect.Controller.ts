import { Socket } from "socket.io";
import Player from "../players/Player";
import Character from "../characters/Character";

export default (socket: Socket, player: Player, character: Character): void => {
  socket.on("disconnect", function () {
    console.log("A peer disconnected!");

    /*
     *  Implement various player/character disconnects that are not flagged as "logouts"
     * */

    socket.broadcast.emit("disconnected", player); // Tell everyone who disconnected
  });
};
