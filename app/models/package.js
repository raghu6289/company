const { DataTypes } = require('sequelize')


module.exports = (Sequelize) => {
  const package = Sequelize.define("package", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lpa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    empId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  }, {
    paranoid: true,
    timestamp: true,
    underscored: true
  })
  return package
}

