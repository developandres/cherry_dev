'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {    

    await queryInterface.bulkInsert('Users', [{

      name: 'Pepito',
      email: 'pepito666@gmail.com',
      state: 'Activo',
      phone: '312817647',
      password: 'pepitopassword',
      rol: 'Contratista',
      createdAt: new Date(),
      updatedAt: new Date()

    }]);
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
    
  }
};
