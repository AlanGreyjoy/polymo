import db from "../../models/index";
import Player from "../players/Player";
import Character from "./Character";
import { Socket } from "socket.io";

export default (socket: Socket, player: Player, character: Character): void => {
  socket.on("updatePosition", function (data: any) {
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

  socket.on("enterWorld", function (data: any) {
    character.Name = data.name;
    character.Level = data.level;
    character.Type = data.Type;
    character.Money.gold = data.gold;
    character.Money.silver = data.silver;
    character.Money.bronze = data.bronze;
    socket.emit("spawn", player);
  });

  socket.on("createCharacter", function (data: any) {
    character.Create(data, socket);
  });
};
