import Auth from "./Auth";
import Character from "../characters/Character";
import { Socket } from "socket.io";
import shortid from "shortid";
import Player from "../players/Player";

export default (socket: Socket, player: Player): void => {
  //this is just to keep track of when I program OUTSIDE the socket on accident.
  socket.emit("register", { id: shortid.generate() });

  /**
   * Login
   */
  socket.on("login", function (data: any) {
    Auth.Login(data)
      .then((result: any) => {
        player.player = result.player;
        socket.emit("loginSuccess", result);
      })
      .catch((err: Error) => {
        console.log(err);
      });
  });

  /**
   * Logout
   */
  socket.on("logout", (data: any) => {
    // Logout implementation
  });
};
