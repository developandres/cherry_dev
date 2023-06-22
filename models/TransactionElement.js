'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TransactionElement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TransactionElement.belongsTo(models.Element,{
        foreignKey:'element_id',
        as:"user",
        
      })
      TransactionElement.belongsTo(models.Transaction,{
        foreingKey: 'transaction_id',
        as:"transaction",
      })
    
    }
  }
  TransactionElement.init({
    transaction_id: DataTypes.INTEGER,
    element_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TransactionElement',
  });
  return TransactionElement;
};