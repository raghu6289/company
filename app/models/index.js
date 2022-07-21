const config = require('../database/config')
const { Sequelize, DataTypes } = require("sequelize");


const db = {};

db.Sequelize = Sequelize;
db.sequelize = config;

db.user = require('./user')
db.department = require('./department')(db.sequelize)
db.employee = require('./employee')(db.sequelize)
db.package = require('./package')(db.sequelize)
db.salary = require('./salary')(db.sequelize)
db.project = require('./project')(db.sequelize)
db.projectEmployee = require('./projectEmployee')(db.sequelize)


// Relationship

// Department Many Employee and Employee have one Department

db.department.hasMany(db.employee, {
  foreignKey: "dept_id", sourceKey: "id",
  as: "employees"
})

db.employee.belongsTo(db.department, {
  foreignKey: "dept_id", targetKey: "id",
  as: "department"
})

// Employee to Package

db.employee.hasMany(db.package, {
  foreignKey: "emp_id", sourceKey: "id",
  as: "package"
})

db.package.belongsTo(db.employee, {
  foreignKey: "emp_id", targetKey: "id",
  as: "employee"
})

// Employee and Package to Salary

db.employee.hasMany(db.salary, {
  foreignKey: "emp_id", sourceKey: "id",
  as: "salary"
})

db.salary.belongsTo(db.employee, {
  foreignKey: "emp_id", targetKey: "id",
  as: "employee"
})

// Projects

db.department.hasMany(db.project, {
  foreignKey: "dept_id", sourceKey: "id",
  as: "projects"
})

db.project.belongsTo(db.department, {
  foreignKey: "dept_id", targetKey: "id",
  as: "department"
})

// Project Assigned

db.projectEmployee.hasMany(db.employee), {
  foreignKey: "project_id", sourceKey: "id",
  as: "projects"
}

db.employee.hasMany(db.projectEmployee), {
  foreignKey: "project_id", sourceKey: "id",
  as: "projects"
}


module.exports = db;