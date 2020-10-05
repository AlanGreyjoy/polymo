'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Character.init({
    PlayerId: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Level: DataTypes.INTEGER,
    Gold: DataTypes.INTEGER,
    Silver: DataTypes.INTEGER,
    Bronze: DataTypes.INTEGER,
    Location: DataTypes.GEOMETRY,
    Rotation: DataTypes.GEOMETRY,
    IsFlying: DataTypes.BOOLEAN,
    IsMounted: DataTypes.BOOLEAN,
    Online: DataTypes.BOOLEAN,
    Type: DataTypes.STRING,
    WorldId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};