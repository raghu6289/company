const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../models/index')
const User = db.user
const { StatusCodes } = require('http-status-codes')
const BadRequestError = require('../errors/badRequestError')
const CustomError = require('../errors/customError')
const UnauthenticateError = require('../errors/authenticateError')


const register = async (userinfo) => {
  const { username, password } = userinfo
  const salt = await bcryptjs.genSalt(10);
  encryptPass = await bcryptjs.hash(password, salt)
  try {
    await User.create({ username: username, password: encryptPass })
    return "successfully created"
  } catch (error) {
    throw new CustomError("username already exiisit please try other", StatusCodes.CONFLICT)
  }
}


const login = async (userinfo) => {
  const { username, password } = userinfo
  const user = await User.findOne({ where: { username: username } })
  if (!user) throw new BadRequestError("user not found please register")
  const pass = await findByCredentials(password, user.password)
  if (!pass) throw new UnauthenticateError("password incorrect please try again")
  const token = await genToken(user)
  return { username: user.username, token }
}


// Password Compare
async function findByCredentials(pass, userpass) {
  return await bcryptjs.compare(pass, userpass)
}


// Generate Token
async function genToken(user) {
  const payload = {
    userId: user.id,
    username: user.username,
    date: new Date()
  }
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_Expires })
  return token
}

module.exports = { register, login }