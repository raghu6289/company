const db = require('../models/index')
const Package = db.package
const Employee = db.employee

const createPackage = async (data) => {
  return await Package.create(data)
}

const updatePackage = async (PackageId, data) => {
  return await Package.update(data, { where: { id: PackageId } })

}

const getPackage = async (packageId) => {
  const data = await Package.findOne({
    where: { id: packageId },
    attributes: ["id", "lpa", "year"],
    include: [{
      model: Employee,
      as: "employee",
      attributes: ["id", "name", "level", "designation", "isActive"]
    }]
  })
  return data
}

module.exports = { createPackage, updatePackage, getPackage }