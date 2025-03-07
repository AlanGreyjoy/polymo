import Faction from "../factions/Faction";
import { IPlayer } from "../../types/Player";

export default class Player implements IPlayer {
  player: any;
  characters: any[];
  friends: any[];
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  isAuthenticated?: boolean;
  socketId?: string;

  constructor() {
    this.player = {};
    this.characters = [];
    this.friends = [];
  }

  GetPlayerInfo = (data: any): void => {};

  GetPlayerCharacters = (data: { id: string }): Promise<any[]> => {
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

  Update = (data: { username: string; Username: string }): void => {
    console.log("Update Player");
    console.log(data);
    if (data.username === "") {
      return;
    }

    // Mock implementation - will be replaced with Supabase
    console.log(`Updated player ${data.Username} to offline status`);
  };

  GetLastPOS = (data: any): void => {};
}
