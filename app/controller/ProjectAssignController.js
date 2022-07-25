const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../errors/notFoundError')
const projectAssignRepo = require('../services/projectAssaignService')

const createProjectAssign = async (req, res) => {
  const project = await projectAssignRepo.createProjectAssign(req.params.id, req.body)
  return res.status(StatusCodes.CREATED).json(project)
}


const getProjectAssign = async (req, res) => {
  const project = await projectAssignRepo.getProjectAssign(req.params.id)
  if (!project) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json(project)
}

const updateProjectAssign = async (req, res) => {
  const Salary = await projectAssignRepo.updateProjectAssign(req.params.id)
  if (!project) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json("Successfully Updated")
}



module.exports = { createProjectAssign, updateProjectAssign, getProjectAssign }