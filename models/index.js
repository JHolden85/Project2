const AnswerQuestion = require('./AnswerQuestion');
const User = require('./User');

// User.hasMany(CustomTrivia, {
//     foreignKey: 'user_id',
//     onDelete: 'CASCADE',
// });

// CustomTrivia.belongsTo(User, {
//     foreignKey: 'user_id',
// });

module.exports = { AnswerQuestion, User };