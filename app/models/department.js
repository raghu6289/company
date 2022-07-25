const { DataTypes } = require('sequelize')

// Datatypes directly from sequelize NPM package and config from model/Index file
module.exports = (Sequelize) => {
    const department = Sequelize.define("department", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 1
        }
    }, {
        paranoid: true,
        timestamp: true,
        underscored: true
    })

    return department
}