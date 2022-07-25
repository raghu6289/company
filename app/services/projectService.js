const projectRepo = require('../reposotires/projectRepo')

const createProject = async (deptId, data) => {
  return await projectRepo.createProject({
    name: data.name,
    amount: data.amount,
    isOngoing: data.isOngoing,
    estimatedDate: data.estimatedDate,
    startDate: data.startDate,
    endDate: data.endDate,
    deptId: Number(deptId)
  })
}

const updateProject = async (id, data) => {
  return await projectRepo.updateProject(id, data)
}

const getProject = async (id) => {
  return await projectRepo.getProject(id)
}
const getAllProject = async () => {
  return await projectRepo.getAllProject()
}

const deleteProject = async (id) => {
  return await projectRepo.deleteProject(id)
}

module.exports = { createProject, getProject, getAllProject, updateProject, deleteProject }