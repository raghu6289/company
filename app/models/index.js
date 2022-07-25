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
  foreignKey: "deptId", sourceKey: "id",
  as: "employees"
})

db.employee.belongsTo(db.department, {
  foreignKey: "deptId", targetKey: "id",
  as: "department"
})

// Employee to Package

db.employee.hasMany(db.package, {
  foreignKey: "empId", sourceKey: "id",
  as: "package"
})

db.package.belongsTo(db.employee, {
  foreignKey: "empId", targetKey: "id",
  as: "employee"
})

// Employee and Package to Salary

db.employee.hasMany(db.salary, {
  foreignKey: "empId", sourceKey: "id",
  as: "salary"
})

db.salary.belongsTo(db.employee, {
  foreignKey: "empId", targetKey: "id",
  as: "employee"
})

// Deaprtment to Projects

db.department.hasMany(db.project, {
  foreignKey: "deptId", sourceKey: "id",
  as: "projects" // Department Projects
})

db.project.belongsTo(db.department, {
  foreignKey: "deptId", targetKey: "id",
  as: "department"
})

// Employee to ProjectAssign

db.employee.hasMany(db.projectEmployee, {
  foreignKey: "empId", sourceKey: "id",
  as: "projects" // Employee Projects
})

db.projectEmployee.belongsTo(db.employee, {
  foreignKey: "empId", targetKey: "id",
  as: "employee"
})

// Project Assigned

db.project.hasMany(db.projectEmployee), {
  foreignKey: "ProjectId", sourceKey: "id",
  as: "projectemployee"
}

db.projectEmployee.belongsTo(db.project), {
  foreignKey: "ProjectId", targetKey: "id",
  as: "projects"
}


module.exports = db;