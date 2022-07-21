const db = require('../models/index')
const Department = db.department
const Employee = db.employee

const createDept = async (data) => {
  return await Department.create(data)
}

const deleteDept = async (deptId) => {
  return await Department.destroy({ where: { id: deptId } })
}

const getAllDept = async () => {
  return await Department.findAll({ attributes: ["id", "name", "is_active"] })

}

const getDept = async (deptId) => {
  const data = await Department.findOne({
    where: {
      id: deptId
    }, attributes: ["id", "name", "is_active"],
    include: [{
      model: Employee,
      as: "employees",
      attributes: ["id", "name", "level", "designation", "is_active"]
    }]
  })
  return data
}

module.exports = { createDept, deleteDept, getDept, getAllDept }