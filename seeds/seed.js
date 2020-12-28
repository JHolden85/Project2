const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');
// We might want to create a model for when users want to create their own questions and we can attach them to the users id
//const categoriesData = require('./categoriesData.json');

const seedDatabase = async() => {
    await sequelize.sync({ force: true });

    await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    process.exit(0);
};

seedDatabase();