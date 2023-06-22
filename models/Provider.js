'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    
    static associate(models) {
      
      //Asociación N:Provider M:Elements
      Provider.hasMany(models.Element,{
        foreignKey: 'provider_id'
      })
    }
  }
  Provider.init({
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    enterprise: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Provider',
  });
  return Provider;
};