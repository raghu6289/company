const projectAssignRepo = require('../services/projectAssaignService')

const createProjectAssign = async (req, res) => {
  try {
    const Salary = await projectAssignRepo.createProjectAssign(req.params.id, req.body)
    return res.send(Salary)
  } catch (error) {
    return res.send(error)
  }
}

const updateProjectAssign = async (req, res) => {
  try {
    const Salary = await projectAssignRepo.updateProjectAssign(req.params.id)
    return res.status(200).json(Salary)
  } catch (error) {
    return res.send(error)
  }
}



module.exports = { createProjectAssign, updateProjectAssign }