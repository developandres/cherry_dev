'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('elements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      origin: {
        type: Sequelize.STRING
      },
      type_element: {
        type: Sequelize.ENUM('Consumible', 'No consumible')
      },
      transaction_element_id:{
        type:Sequelize.INTEGER,
        foreingKey: true,
      },
      provider_id:{
        type:Sequelize.INTEGER,
        references:{model:'providers',key:'id'},
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull:false
      },
      value: {
        type: Sequelize.INTEGER
      },
      state: {
        type:Sequelize.ENUM('Bien','Mal')
      },
      stock: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('elements');
  }
};