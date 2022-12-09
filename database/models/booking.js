'use strict';
const { Model, DataTypes } = require('sequelize');
import connection from "../connection"
const initBooking = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Booking.belongsTo(models.Task, { foreignKey: 'UserId' })
      Booking.belongsTo(models.User)

    }
  }
  Booking.init({
    id:  {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    UserId: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER,
    statusArrival: DataTypes.BOOLEAN,
    statusTime: DataTypes.INTEGER,
    statusDone: DataTypes.BOOLEAN,
    cancel: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};

export default initBooking(connection, DataTypes)