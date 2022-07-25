const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const project = sequelize.define("project", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    isOngoing: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 1
    },
    estimatedDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    deptId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  }, {
    paranoid: true,
    timestamp: true,
    underscored: true
  })

  return project
}