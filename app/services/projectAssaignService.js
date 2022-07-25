const projectAssignRepo = require('../reposotires/projectAssignRepo')

const createProjectAssign = async (projectId, data) => {
  const result = data.map(item => {
    return { ...item, projectId: Number(projectId) }
  })

  return await projectAssignRepo.createProjectAssign(result)
}

const updateProjectAssign = async (id) => {
  return await projectAssignRepo.updateProjectAssign(id)
}

const getProjectAssign = async (id) => {
  return await projectAssignRepo.getProjectAssign(id)
}

module.exports = { createProjectAssign, updateProjectAssign, getProjectAssign }