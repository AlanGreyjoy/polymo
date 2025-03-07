import { ICharacter } from "../../types/Character";
import { Socket } from "socket.io";

interface CharacterData {
  player: {
    username: string;
  };
  name: string;
  type: string;
}

interface Position {
  x: number;
  y: number;
  z: number;
}

interface Money {
  gold: number;
  silver: number;
  bronze: number;
}

export default class Character implements ICharacter {
  id?: string;
  name?: string;
  class?: string;
  level?: number;
  experience?: number;
  health?: number;
  mana?: number;
  attributes?: {
    strength?: number;
    dexterity?: number;
    intelligence?: number;
    constitution?: number;
  };

  // Additional properties
  Name: string;
  Level: string;
  Type: string;
  IsFlying: boolean;
  IsMounted: boolean;
  Online: boolean;
  WorldId: boolean;
  Money: Money;
  Position: Position;
  Rotation: Position;

  constructor() {
    this.Name = "";
    this.Level = "";
    this.Type = "";
    this.IsFlying = false;
    this.IsMounted = false;
    this.Online = false;
    this.WorldId = false;
    this.Money = {
      gold: 0,
      silver: 0,
      bronze: 0,
    };
    this.Position = {
      x: 0,
      y: 0,
      z: 0,
    };
    this.Rotation = {
      x: 0,
      y: 0,
      z: 0,
    };
  }

  Create = (data: CharacterData, socket: Socket): void => {
    if (!data.player.username) {
      return;
    }

    // Using mock model instead of actual database
    socket.emit("characterCreated", {
      id: Math.random().toString(36).substring(2, 15),
      PlayerId: Math.random().toString(36).substring(2, 15),
      Name: data.name,
      Type: data.type,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };
}
