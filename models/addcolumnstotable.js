'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class addColumnstotable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  addColumnstotable.init({
    store_id: DataTypes.INTEGER,
    transaction_element_id: DataTypes.INTEGER,
    user_transaction_id: DataTypes.INTEGER,
    provider: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'addColumnstotable',
  });
  return addColumnstotable;
};