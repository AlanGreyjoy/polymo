'use strict';

let bcrypt  = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Users', [{
      Username: 'NalaLockspur',
      Password: bcrypt.hashSync('a3s0m3m@n!', 8),
      Email: 'alanspurlock@hotmail.com',
      Online: false,
      FirstName: 'Alan',
      LastName: 'Spurlock',
      Verified: true,
      Mfa: 0,
      MfaTimeout: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', {})
  }
};
