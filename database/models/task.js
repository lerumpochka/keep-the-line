'use strict';
const { Model, DataTypes} = require('sequelize');
import connection from "../connection"

const initTask= (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.belongsTo(models.User)
      // //one task can be booked by only one user
      Task.belongsToMany(models.User, {through: models.Booking})

    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    amount: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME,
    progress: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};
export default initTask(connection, DataTypes)