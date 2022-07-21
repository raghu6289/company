const projectAssignRepo = require('../reposotires/projectAssignRepo')
const db = require('../models/index')

const createProjectAssign = async (empId, data) => {

  return await projectAssignRepo.createProjectAssign()
  // return await projectAssignRepo.createProjectAssign({
  //   amount: salAmoount,
  //   incentive: incentive,
  //   date: data.date,
  //   totalAmount: salAmoount + incentive,
  //   emp_id: Number(empId)
  // })
}


const updateProjectAssign = async (id) => {
  return await projectAssignRepo.updateProjectAssign(id)
}

module.exports = { createProjectAssign, updateProjectAssign }