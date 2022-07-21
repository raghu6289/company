const Joi = require('joi')

module.exports = projectValidation = Joi.object({
  name: Joi.string().alphanum().min(3).max(30),
  amount: Joi.number().positive().greater(0),
  is_ongoing: Joi.string(),
  estimated_date: Joi.date(),
  start_date: Joi.date(),
  end_date: Joi.date()
})