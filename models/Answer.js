const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Answer extends Model {}

Answer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },

module.exports = Answer);