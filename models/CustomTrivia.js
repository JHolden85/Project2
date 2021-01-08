const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CustomTrivia extends Model {}

CustomTrivia.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
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
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
}, {
    sequelize,
    timestamps: false,
    freezeTableName: false,
    underscored: true,
    modelName: 'CustomTrivia',
});

module.exports = CustomTrivia;