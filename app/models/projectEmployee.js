const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const projectEmployee = sequelize.define("projectEmployee", {
    status: {
      type: DataTypes.ENUM("started", "working", "completed"),
      allowNull: false,
      default: "started"
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY
    }
  }, {
    paranoid: true,
    timestamp: true,
    underscored: true
  })
  return projectEmployee
}
