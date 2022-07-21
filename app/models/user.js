const { DataTypes } = require('sequelize');
const sequelize = require('../database/config')


// Another type of creating table
const user = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    timestamp: true,
  }
)

module.exports = user