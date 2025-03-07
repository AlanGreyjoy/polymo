import shortid from "shortid";
import Faction from "../factions/Faction";

interface IMob {
  id: string;
  name: string;
  description: string;
  worldPosition: string;
  worldRotation: string;
  level: number;
  faction: any;
}

export default class Mob implements IMob {
  id: string;
  name: string;
  description: string;
  worldPosition: string;
  worldRotation: string;
  level: number;
  faction: any;

  constructor() {
    this.id = shortid.generate();
    this.name = "";
    this.description = "";
    this.worldPosition = "";
    this.worldRotation = "";
    this.level = 1;
    this.faction = new Faction();
  }
}
