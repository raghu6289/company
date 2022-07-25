const Joi = require('joi')

module.exports = projectValidation = Joi.object({
  name: Joi.string().min(3).max(30),
  amount: Joi.number().positive().greater(0),
  isOngoing: Joi.boolean(),
  estimatedDate: Joi.date(),
  startDate: Joi.date(),
  endDate: Joi.date()
})