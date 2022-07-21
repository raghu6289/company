const projectRepo = require('../reposotires/projectRepo')

const createProject = async (deptId, data) => {
  return await projectRepo.createProject({
    name: data.name,
    amount: data.amount,
    is_ongoing: data.is_ongoing,
    estimated_date: data.estimated_date,
    start_date: data.start_date,
    end_date: data.end_date,
    dept_id: Number(deptId)
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