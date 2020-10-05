'use strict';
const { Model } = require('sequelize');

/*
*  Sequelize
* */
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Player.hasMany(models.Character)
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
  return Player;
};