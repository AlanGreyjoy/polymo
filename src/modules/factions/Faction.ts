interface IFaction {
  name: string;
  description: string;
  enemyFactions: string[];
  hostile: boolean;
  isNPC: boolean;
  isAnimal: boolean;
}

export default class Faction implements IFaction {
  name: string;
  description: string;
  enemyFactions: string[];
  hostile: boolean;
  isNPC: boolean;
  isAnimal: boolean;

  constructor() {
    this.name = "";
    this.description = "";
    this.enemyFactions = [];
    this.hostile = false;
    this.isNPC = false;
    this.isAnimal = false;
  }
}
