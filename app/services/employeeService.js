const empRepo = require('../reposotires/employeeRepo')

const createEmp = async (deptId, data) => {
  return await empRepo.createEmp({
    name: data.name,
    phoneNumber: data.phoneNumber,
    address: data.address,
    doj: data.doj,
    dob: data.dob,
    email: data.email,
    level: data.level,
    designation: data.designation,
    dept_id: Number(deptId)
  })
}

const updateEmp = async (empId, data) => {
  return await empRepo.updateEmp(empId, data)
}

const deleteEmp = async (id) => {
  return await empRepo.deleteEmp(id)
}

const getEmp = async (id) => {
  return await empRepo.getEmp(id)
}

const getEmpSal = async (id) => {
  return await empRepo.getEmpSal(id)
}

module.exports = { createEmp, updateEmp, deleteEmp, getEmp, getEmpSal }