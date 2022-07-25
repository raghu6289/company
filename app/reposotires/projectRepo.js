const { sequelize } = require('../models/index')
const db = require('../models/index')
const Department = db.department
const Project = db.project
const projectEmployee = db.projectEmployee

const createProject = async (data) => {
  return await Project.create(data)
}

const updateProject = async (projectId, data) => {
  return await Project.update(data, { where: { id: projectId } })
}

const deleteProject = async (projectId) => {
  return await Project.destroy({ where: { id: projectId } })

}

const getProject = async (projectId) => {
  const data = await Project.findOne({
    where: {
      id: projectId
    }, attributes: ["id", "name", "amount", "isOngoing", "estimatedDate", "startDate", "endDate"],
    include: [
      {
        model: Department,
        as: "department",
        attributes: ['name']
      }, {
        model: projectEmployee,
        where: {
          projectId: projectId
        },
        attributes: [[sequelize.fn('count', 0), 'No of Working Employees']]
      }
    ]
  })
  return data
}

const getAllProject = async () => {
  const data = await Project.findAll({
    attributes: ["id", "name", "amount", "isOngoing", "estimatedDate", "startDate", "endDate"],
    include: [
      {
        model: Department,
        as: "department",
        attributes: ['name']
      }
    ]
  })
  return data
}

module.exports = { createProject, updateProject, getProject, getAllProject, deleteProject }