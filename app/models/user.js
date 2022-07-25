const { DataTypes } = require('sequelize');
const sequelize = require('../database/config')


// Another type of creating table
const user = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    timestamp: true,
    underscored: true
  }
)

module.exports = user