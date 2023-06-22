'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Providers', [{
      name: 'Super Inter',
      phone: '3178377884',
      enterprise:'Cocacola',
      idUsuario: 1,      
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Providers', null, {});
  }
};
