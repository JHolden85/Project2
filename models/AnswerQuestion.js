const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AnswerQuestion extends Model {}

Answer.init({
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
        allowNull: false,
        fields: [3],
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'AnswerQuestion',
});

module.exports = AnswerQuestion;