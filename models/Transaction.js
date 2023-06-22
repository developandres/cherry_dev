'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {

      //Relacion user : transaction
      Transaction.belongsToMany(models.User,{
        through:'UserTransaction',
        foreignKey:'transaction_id'
      })

      //Relacion element : transaction
      Transaction.belongsToMany(models.Element,{
        through:'TransactionElement',
        foreignKey:'transaction_id'
      })

     
    }
  }
  Transaction.init({
    user_transaction_id: DataTypes.INTEGER,
    type_transaction: DataTypes.ENUM('Prestamo','Traslado'),
    time_use: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};

