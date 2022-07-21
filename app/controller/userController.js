const { StatusCodes } = require('http-status-codes')
const userService = require('../services/userService')
const BadRequestError = require('../errors/badRequestError')

const register = async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) throw new BadRequestError("All input is required")
  if (username.length < 3) throw new BadRequestError("userName must be at least 3")
  if (password.length < 6) throw new BadRequestError("password must be at least 5")
  const user = await userService.register(req.body)
  return res.status(StatusCodes.OK).json(user)
}

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!(username && password)) throw new BadRequestError("all input is required")
  const user = await userService.login(req.body)
  return res.status(StatusCodes.OK).json(user)
}


module.exports = { register, login }