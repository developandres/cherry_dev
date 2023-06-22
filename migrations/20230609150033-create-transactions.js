'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type_transaction: {
        type:Sequelize.ENUM('Prestamo','Traslado')
      },
      time_use: {
        type: Sequelize.DATE
      },
      transaction_element_id: {
        type:Sequelize.INTEGER,
        references:{ model:'elements',key:'id' },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull: false
      },
      user_transaction_id:{
        type:Sequelize.INTEGER,
        references:{ model:'users_transactions',key:'transaction_id' },
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        allowNull: false
      },
      createdAt:{
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addColumn('transactions' , 'transaction_element_id',{
      type:Sequelize.INTEGER,
      references:{ model:'elements',key:'id' },
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
      allowNull: false
    })

    await queryInterface.addColumn('transactions' , 'user_transaction_id',{   
      type:Sequelize.INTEGER,
      references:{ model:'users_transactions',key:'transaction_id' },
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
      allowNull: false
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};