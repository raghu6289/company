const Joi = require('joi')

module.exports = deptValidation = Joi.object({
  name: Joi.string().min(2).max(30),
  isActive: Joi.boolean()
})