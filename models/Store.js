'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Store extends Model {

    static associate(models) {

      //N:Store M:Elements
      Store.belongsTo(models.Element,{
        foreignKey:'element_id'
      })   
    }
  }
  Store.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    locate: DataTypes.STRING,
    element_id:{
      type:DataTypes.INTEGER,
      references:{model:'elements',key:'id'},
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'Store',
  });
  return Store;
};