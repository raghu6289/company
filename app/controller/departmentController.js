const { StatusCodes } = require('http-status-codes')
const deptService = require('../services/departmentService')
const NotFoundError = require('../errors/notFoundError')

const createDept = async (req, res) => {
  const dept = await deptService.createDept(req.body)
  return res.status(StatusCodes.CREATED).json(dept)
}

const getDept = async (req, res) => {
  const dept = await deptService.getDept(req.params.id)
  if (!dept) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json(dept)
}

const getAllDept = async (req, res) => {
  const dept = await deptService.getAllDept()
  if (!dept) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json(dept)
}


const deleteDept = async (req, res) => {
  const dept = await deptService.deleteDept(req.params.id)
  if (!dept) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json("Successfully Deleted")
}


module.exports = { createDept, deleteDept, getDept, getAllDept }