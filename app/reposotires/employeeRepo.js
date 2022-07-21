const db = require('../models/index')
const Employee = db.employee
const Dept = db.department
const Package = db.package
const Salary = db.salary

const createEmp = async (data) => {
  return await Employee.create(data)
}

const updateEmp = async (empId, data) => {
  return await Employee.update(data, { where: { id: empId } })

}

const deleteEmp = async (empId) => {
  return await Employee.destroy({ where: { id: empId } })
}

const getEmp = async (empId) => {
  const data = await Employee.findOne({
    where: {
      id: empId
    }, attributes: ["id", "name", "phoneNumber", "address", "doj", "dob", "level", "email", "designation", "is_active"],
    include: [
      {
        model: Dept,
        as: "department",
        attributes: ['name']
      },
      {
        model: Package,
        as: "package",
        attributes: ["lpa", "year"]
      },
    ]
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
        attributes: ["date", "grossEarnings", "monthly_incentive", "tax", "netSalary"]
      }
    ]
  })
  return data
}

module.exports = { createEmp, updateEmp, deleteEmp, getEmp, getEmpSal }