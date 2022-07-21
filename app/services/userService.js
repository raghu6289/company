
const userRepo = require('../reposotires/userRepo')

const register = async (data) => {
  return await userRepo.register(data)
}


const login = async (data) => {
  return await userRepo.login(data)
}


module.exports = { register, login }