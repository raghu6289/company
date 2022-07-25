const Joi = require('joi')

module.exports = salaryValidation = Joi.object({
  monthlyIncentive: Joi.number().positive().greater(0),
  date: Joi.date().raw(),
})