const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'company',
    'root',
    'root',
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

sequelize.authenticate().then(() => {
    console.log("Database connected");
}).catch((err) => {
    console.log("Failed to connect..", err);
})

module.exports = sequelize