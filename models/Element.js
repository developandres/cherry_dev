'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Element extends Model {

    static associate(models) {

      //N:Provider M:Elements
      Element.belongsTo(models.Provider,{
        foreignKey:'provider_id'
      })
      
      //N:Store M:Elements
      Element.hasMany(models.Store,{
        foreingKey:'element_id'
      })

      
      Element.belongsToMany(models.Transaction,{
        foreignKey:'element_id',
        through:'TransactionElement',
        as:"element"
      })
    }
  }
  Element.init({
    name: DataTypes.STRING,
    brand: DataTypes.STRING,
    origin: DataTypes.STRING,
    transaction_element_id:{
      type:DataTypes.INTEGER,
      references:{model:'transactions_elements',key:'id'},
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
    },
    type_element:DataTypes.ENUM('Consumible', 'No consumible'),
    value: DataTypes.INTEGER,
    provider_id:DataTypes.INTEGER,
    state: DataTypes.ENUM('Bien','Mal'),
    stock: DataTypes.INTEGER,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Element',
  });

  return Element
};