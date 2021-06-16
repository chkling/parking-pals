'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reservations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  reservations.init({
    driver_id: DataTypes.INTEGER,
    driveway_id: DataTypes.INTEGER,
    host_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    start_request: DataTypes.TIME,
    end_request: DataTypes.TIME,
    distance: DataTypes.INTEGER,
    stripe_payment: DataTypes.INTEGER,
    date_created: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Reservations',
  });
  return Reservations;
};