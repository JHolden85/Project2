const AnswerQuestion = require('./AnswerQuestion');
const User = require('./User');
const CustomTrivia = require('./CustomTrivia');

User.hasMany(CustomTrivia, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

CustomTrivia.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { CustomTrivia, User, AnswerQuestion };