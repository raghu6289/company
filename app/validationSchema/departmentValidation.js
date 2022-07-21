const Joi = require('joi')

module.exports = deptValidation = Joi.object({
  name: Joi.string().alphanum().min(2).max(30)
})