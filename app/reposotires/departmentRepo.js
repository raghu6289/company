const { StatusCodes } = require('http-status-codes')
const CustomError = require('../errors/customError')
const db = require('../models/index')
const Department = db.department
const Employee = db.employee
const Project = db.project

const createDept = async (data) => {
  try {
    return await Department.create(data)
  } catch (error) {
    throw new CustomError("department name already exisist please try other", StatusCodes.CONFLICT)
  }
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
    }, attributes: ["id", "name", "isActive"],
    include: [{
      model: Project,
      as: "projects",
      attributes: ["id", "name"]
    },
      // {
      //   model: Employee,
      //   as: "employees",
      //   attributes: ["id", "name", "level", "designation", "isActive"]
      // }
    ]
  })
  return data
}

module.exports = { createDept, deleteDept, getDept, getAllDept }