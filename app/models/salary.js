const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const salary = sequelize.define("salary", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    grossEarnings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monthlyIncentive: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tax: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    netSalary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
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
  return salary
}