import shortid from "shortid";
import Player from "../players/Player";

interface IFriend {
  id: string;
  player: any;
}

export default class Friend implements IFriend {
  id: string;
  player: any;

  constructor() {
    this.id = shortid.generate();
    this.player = new Player();
  }
}
