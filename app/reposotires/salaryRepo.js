const db = require('../models/index')
const Employee = db.employee
const salary = db.salary

const createSalary = async (data) => {
  return await salary.create(data)
}

const getSalary = async (salId) => {
  const data = await salary.findOne({
    where: { id: salId }, attributes: ["id", "date", "grossEarnings", "monthly_incentive", "tax", "netSalary"],
    include: [{
      model: Employee,
      as: "employee",
      attributes: ["id", "name", "level", "designation", "is_active"]
    }]
  })
  return data
}

module.exports = { createSalary, getSalary }