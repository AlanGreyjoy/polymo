// Mock models to be replaced with Supabase implementation
class PlayerModel {
  static findOne() {
    return Promise.resolve(null);
  }

  static findAll() {
    return Promise.resolve([]);
  }

  static create() {
    return Promise.resolve({});
  }
}

class CharacterModel {
  static findOne() {
    return Promise.resolve(null);
  }

  static findAll() {
    return Promise.resolve([]);
  }

  static create() {
    return Promise.resolve({});
  }
}

class UserModel {
  static findOne() {
    return Promise.resolve(null);
  }

  static findAll() {
    return Promise.resolve([]);
  }

  static create() {
    return Promise.resolve({});
  }
}

// Export mock models
const db = {
  Player: PlayerModel,
  Character: CharacterModel,
  User: UserModel,
};

export default db;
