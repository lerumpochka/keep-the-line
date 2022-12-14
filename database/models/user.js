'use strict';
const { Model, DataTypes } = require('sequelize');
import connection from "../connection"

const initUser = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //owner assoc
      User.hasMany(models.Task)
      // //keeper can book many tasks
      User.belongsToMany(models.Task, {through: models.Booking})
      
    }
  }
  User.init({
    name:{
      type: DataTypes.STRING,
      allowNull: false
    },
    surName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};

export default initUser(connection, DataTypes)