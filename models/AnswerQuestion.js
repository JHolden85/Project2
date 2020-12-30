const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AnswerQuestion extends Model {}

AnswerQuestion.init({
    category: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    question: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    correct_answer: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    incorrect_answers: {
        type: DataTypes.STRING,
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'AnswerQuestion',
});

module.exports = AnswerQuestion;