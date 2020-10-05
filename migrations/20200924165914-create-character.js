'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PlayerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      Name: {
        type: Sequelize.STRING,
        unique: true
      },
      Level: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Gold: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Silver: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Bronze: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      Location: {
        type: Sequelize.GEOMETRY
      },
      Rotation: {
        type: Sequelize.GEOMETRY
      },
      IsFlying: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      IsMounted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Online: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      Type: {
        type: Sequelize.STRING
      },
      WorldId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Characters');
  }
};