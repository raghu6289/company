const packageRepo = require('../reposotires/packageRepo')

const createPackage = async (empId, data) => {
  return await packageRepo.createPackage({
    lpa: data.lpa,
    year: data.year,
    empId: Number(empId)
  })
}

const updatePackage = async (id, data) => {
  return await packageRepo.updatePackage(id, data)
}

const getPackage = async (id) => {
  return await packageRepo.getPackage(id)
}

module.exports = { createPackage, updatePackage, getPackage }