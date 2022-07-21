const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
  const employee = sequelize.define("employee", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    doj: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    designation: {
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

  return employee
}