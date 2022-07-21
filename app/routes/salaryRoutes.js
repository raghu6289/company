const salaryController = require('../controller/salaryController')
const salaryValidation = require('../validationSchema/salaryValidation')
const { createValidator } = require('express-joi-validation')
const validator = createValidator()
const router = require('express').Router()


router.post('/emp/:id/', validator.body(salaryValidation), salaryController.createSalary)

router.get('/:id', salaryController.getSalary)


module.exports = router
