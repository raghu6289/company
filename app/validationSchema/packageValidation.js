const Joi = require('joi')

module.exports = packageValidation = Joi.object({
  lpa: Joi.number().positive().greater(0),
  year: Joi.string(),
  isActive: Joi.boolean()
})