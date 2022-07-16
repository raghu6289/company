const config = require('../Database/config')
const { Sequelize} = require("sequelize");


const db = {};

db.Sequelize = Sequelize;
db.sequelize = config;

db.department = require('./department')(db.sequelize,db.Sequelize)

module.exports = db;