const Joi = require('joi')

module.exports = salaryValidation = Joi.object({
  monthly_incentive: Joi.number().positive().greater(0),
  date: Joi.date().raw(),
})