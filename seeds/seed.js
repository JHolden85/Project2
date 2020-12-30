const sequelize = require('../config/connection');
const { AnswerQuestion } = require('../models');

const questionsData = require('./answerQuestionData.json');
// We might want to create a model for when users want to create their own questions and we can attach them to the users id
//const categoriesData = require('./categoriesData.json');

const seedDatabase = async() => {
    try {
        await sequelize.sync({ force: true });
        const modifiedData = questionsData.map((a) => {
            a.incorrect_answers = JSON.stringify(a.incorrect_answers);
            return a;
        });
        await AnswerQuestion.bulkCreate(modifiedData, {
            individualHooks: true,
            returning: true,
        });
    } catch (err) {
        console.log(err);
    }
    process.exit(0);
};

seedDatabase();