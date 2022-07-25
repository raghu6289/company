const db = require('../models/index')
const Employee = db.employee
const Dept = db.department
const Package = db.package
const ProjectAssign = db.projectEmployee
const Project = db.project

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
    }, attributes: ["id", "name", "phoneNumber", "address", "doj", "dob", "level", "email", "designation", "isActive"],
    include: [
      {
        model: Dept,
        as: "department",
        attributes: ['name']
      },
      {
        model: ProjectAssign,
        as: "projects",
        attributes: ["projectId"],
        include: [{
          model: Project,
          attributes: ["name"]
        }],
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


module.exports = { createEmp, updateEmp, deleteEmp, getEmp }