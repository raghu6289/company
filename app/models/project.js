const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const project = sequelize.define("project", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    is_ongoing: {
      type: DataTypes.ENUM("yes", "no"),
      allowNull: false,
      defaultValue: "yes"
    },
    estimated_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    paranoid: true,
    timestamp: true,
    underscored: true
  })

  return project
}