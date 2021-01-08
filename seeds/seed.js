const sequelize = require('../config/connection');
const { AnswerQuestion, CustomTrivia, User } = require('../models');

const questionsData = require('./answerQuestionData.json');
const customTriviaData = require('./customTriviaData');
const userData = require('./userData.json');

const seedDatabase = async() => {
    try {
        await sequelize.sync({ force: true });
        const modifiedData = questionsData.map((a) => {
            a.incorrect_answers = JSON.stringify(a.incorrect_answers);
            return a;
        });
        await sequelize.sync({ force: true });
        const customModifiedData = customTriviaData.map((a) => {
            a.incorrect_answers = JSON.stringify(a.incorrect_answers);
            return a;
        });
        await AnswerQuestion.bulkCreate(modifiedData, {
            individualHooks: true,
            returning: true,
        });
        await CustomTrivia.bulkCreate(customModifiedData, {
            individualHooks: true,
            returning: true,
        });
        await User.bulkCreate(userData, {
            individualHooks: true,
            returning: true,
        });
        for (const customTrivia of customModifiedData) {
            await CustomTrivia.create({
                ...customTrivia,
                user_id: users[Math.floor(Math.random() * users.length)].id,
            });
        }
    } catch (err) {
        console.log(err);
    }
    process.exit(0);
};

seedDatabase();