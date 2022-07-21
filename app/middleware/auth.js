const jwt = require('jsonwebtoken')
const UnauthenticateError = require('../errors/authenticateError')

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer ')) throw new UnauthenticateError("Authentication invalid")
  const token = authHeader.split(' ')[1]
  const verify = await jwt.verify(token, process.env.JWT_SECRET)
  req.user = { userId: verify.userId, name: verify.name }
  next()
}

module.exports = auth