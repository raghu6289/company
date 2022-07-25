const Joi = require('joi')

module.exports = empValidation = Joi.object({
  name: Joi.string().min(3).max(30),
  phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/),
  address: Joi.string().min(3).max(30),
  doj: Joi.date(),
  dob: Joi.date(),
  email: Joi.string().email(),
  level: Joi.string().alphanum(),
  designation: Joi.string(),
  isActive: Joi.boolean()
})