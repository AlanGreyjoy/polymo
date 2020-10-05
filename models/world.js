'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class World extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  World.init({
    Name: DataTypes.STRING,
    Description: DataTypes.STRING,
    WorldSpawn: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'World',
  });
  return World;
};