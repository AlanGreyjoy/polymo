import { Socket } from "socket.io";
import Player from "./Player";

export default (socket: Socket, player: Player): void => {
  socket.on("getPlayerInfo", (data: any) => {
    // Implementation for getPlayerInfo
  });

  socket.on("getPlayerCharacters", function (data: any) {
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
