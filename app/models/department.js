const { DataTypes } = require('sequelize')
const employee = require('./employee')

// Datatypes directly from sequelize NPM package and config from model/Index file
module.exports = (Sequelize) => {
    const department = Sequelize.define("department", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.ENUM("yes", "no"),
            allowNull: false,
            defaultValue: "yes"
        }
    }, {
        paranoid: true,
        timestamp: true,
        underscored: true
    })

    return department
}