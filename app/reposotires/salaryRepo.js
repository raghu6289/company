const db = require('../models/index')
const Employee = db.employee
const Salary = db.salary

const createSalary = async (data) => {
  return await Salary.create(data)
}

const getSalary = async (salId) => {
  const data = await Salary.findOne({
    where: { id: salId }, attributes: ["id", "date", "grossEarnings", "monthlyIncentive", "tax", "netSalary"],
    include: [{
      model: Employee,
      as: "employee",
      attributes: ["id", "name", "level", "designation", "isActive"]
    }]
  })
  return data
}

const getEmpSal = async (empId) => {
  const data = await Employee.findAll({
    where: {
      id: empId,
    }, attributes: ["id", "name", "doj", "level", "designation",],
    include: [
      {
        model: Salary,
        as: "salary",
        attributes: ["date", "grossEarnings", "monthlyIncentive", "tax", "netSalary"]
      },

    ]
  })
  return data
}

module.exports = { createSalary, getSalary, getEmpSal }