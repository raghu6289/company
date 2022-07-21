const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../errors/notFoundError')
const packageService = require('../services/packageService')

const createPackage = async (req, res) => {
  const package = await packageService.createPackage(req.params.id, req.body)
  return res.status(StatusCodes.CREATED).json(package)
}

const getPackage = async (req, res) => {
  const package = await packageService.getPackage(req.params.id)
  if (!package) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json(package)
}

const updatePackage = async (req, res) => {
  const package = await packageService.updatePackage(req.params.id, req.body)
  if (!package) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json("Successfully Updated")
}


module.exports = { createPackage, updatePackage, getPackage }