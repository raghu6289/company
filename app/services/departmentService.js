const deptRepo = require('../reposotires/departmentRepo')

const createDept = async (data) => {
  return await deptRepo.createDept(data)
}

const deleteDept = async (id) => {
  return await deptRepo.deleteDept(id)
}

const getDept = async (id) => {
  return await deptRepo.getDept(id)
}

const getAllDept = async () => {
  return await deptRepo.getAllDept()
}

module.exports = { createDept, deleteDept, getDept, getAllDept }