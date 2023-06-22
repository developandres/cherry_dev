'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('elements','store_id' ,{
      store_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'store',
          key:'id'
        }
      },
      onUpdate:'CASCADE',
      onDelete:'CASCADE'
    }),

    await queryInterface.addColumn('transactions' ,{
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
    }), 
    
    await queryInterface.addColumn('elements','provider_id' ,{
      provider_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'provider',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete:'CASCADE'
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('addColumnstotables', 'store_id');
    await queryInterface.removeColumn('addColumnstotables', 'provider_id  ');
  }
};
