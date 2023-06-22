'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      
      User.belongsToMany(models.Transaction,{
        through:'UserTransaction',
        foreignKey: 'user_id',
      })

    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    state: DataTypes.ENUM('Activo', 'Inactivo'),
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.ENUM('Contratista','Planta'),
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};