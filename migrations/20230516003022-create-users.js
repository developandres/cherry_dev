'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          notEmpty:true
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          notEmpty:true,
        },
        unique: true
      },
      state: {
        type: Sequelize.ENUM('Activo', 'Inactivo'),
        defaultValue: 'Activo'
      },
      phone: {
        type: Sequelize.STRING,
        validate: {
          notEmpty:true,
        }
      },
      password: {
        type: Sequelize.STRING,
        validate: {
          notEmpty:true,
        }
      },
      rol: {
        type: Sequelize.ENUM('Contratista','Planta'),
        defaultValue: 'Contratista'
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
    await queryInterface.dropTable('users');
  }
};