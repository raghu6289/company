const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../errors/notFoundError')
const projectRepo = require('../services/projectService')

const createProject = async (req, res) => {
  const project = await projectRepo.createProject(req.params.id, req.body)
  return res.status(StatusCodes.CREATED).json(project)

}

const updateProject = async (req, res) => {
  const project = await projectRepo.updateProject(req.params.id, req.body)
  if (!project) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json("Successfully Updated")
}

const deleteProject = async (req, res) => {
  const project = await projectRepo.deleteProject(req.params.id)
  if (!project) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json("Successfully Deleted")
}

const getProject = async (req, res) => {
  const project = await projectRepo.getProject(req.params.id)
  if (!project) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json(project)
}

const getAllProject = async (req, res) => {
  const projects = await projectRepo.getAllProject()
  if (projects.length == 0) throw new NotFoundError("results not found")
  return res.status(StatusCodes.OK).json({ projects, totalProjects: projects.length })
}


module.exports = { createProject, getProject, getAllProject, updateProject, deleteProject }