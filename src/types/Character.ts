export interface ICharacter {
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
  // Add more properties as needed
}

export default ICharacter;
