'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Username: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      Password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      Online: {
        type: Sequelize.BOOLEAN
      },
      FirstName: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      Verified: {
        type: Sequelize.BOOLEAN
      },
      Mfa: {
        type: Sequelize.INTEGER
      },
      MfaTimeout: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Players');
  }
};