'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Character)
    }
  };
  Player.init({
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Email: DataTypes.STRING,
    Online: DataTypes.BOOLEAN,
    FirstName: DataTypes.STRING,
    LastName: DataTypes.STRING,
    Verified: DataTypes.BOOLEAN,
    Mfa: DataTypes.INTEGER,
    MfaTimeout: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Player',
  });
  return User;
};