const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const salary = sequelize.define("salary", {
    grossEarnings: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monthly_incentive: {
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
  }, {
    paranoid: true,
    timestamp: true,
    underscored: true
  })
  return salary
}