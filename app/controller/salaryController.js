const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../errors/notFoundError')
const salaryRepo = require('../services/salaryService')

const createSalary = async (req, res) => {
  const salary = await salaryRepo.createSalary(req.params.id, req.body)
  return res.status(StatusCodes.CREATED).json(salary)
}

const getSalary = async (req, res) => {
  const salary = await salaryRepo.getSalary(req.params.id)
  if (!salary) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json(salary)
}



module.exports = { createSalary, getSalary }