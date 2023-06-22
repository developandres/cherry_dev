'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserTransaction extends Model {

    static associate(models) {



      UserTransaction.belongsTo(models.Transaction,{
        foreignKey:'transaction_id',
        onDelete:'CASCADE'
        
      })
      UserTransaction.belongsTo(models.User,{
        foreingKey: 'user_id',
        onDelete:'CASCADE'
      } )
    
    }
  }
  UserTransaction.init({
    user_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserTransaction',
  });
  return UserTransaction;
};