const { DataTypes } = require('sequelize')


module.exports = (Sequelize) => {
  const package = Sequelize.define("package", {
    lpa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.TEXT,
      allowNull: false
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
  return package
}

