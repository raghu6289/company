const db = require('../models/index')
const Employee = db.employee
const Project = db.project
const ProjectAssign = db.projectEmployee

const createProjectAssign = async (data) => {
  return ProjectAssign.bulkCreate(data)
}

const updateProjectAssign = async (id, data) => {
  return id + data
}

const getProjectAssign = async (id) => {
  const result = await ProjectAssign.findOne({
    where: { id: id }, attributes: ["id", "startDate", "endDate"],
    include: [{
      model: Project,
      // as: "project",
      attributes: ["name"]
    },
    {
      model: Employee,
      as: "employee",
      attributes: ["id", "name", "level"]
    }]
  })
  return result
}

module.exports = { createProjectAssign, updateProjectAssign, getProjectAssign }