import Player from "../players/Player";
import Character from "../characters/Character";
import { Server, Socket } from "socket.io";

// Import controllers
import authController from "../auth/Auth.Controller";
import playerController from "../players/Player.Controller";
import characterController from "../characters/Character.Controller";
import disconnectController from "./Disconnect.Controller";

export default (io: Server): void => {
  io.on("connection", function (socket: Socket) {
    console.log("peer connected");

    const player = new Player();
    const character = new Character();

    // Auth
    authController(socket, player);

    // Players
    playerController(socket, player);

    // Characters
    characterController(socket, player, character);

    // Handle Disconnects
    disconnectController(socket, player, character);
  });
};
