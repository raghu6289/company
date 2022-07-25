const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const projectEmployee = sequelize.define("projectEmployee", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY
    },
    empId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    projectId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  }, {
    paranoid: true,
    timestamp: true,
    underscored: true
  })
  return projectEmployee
}
