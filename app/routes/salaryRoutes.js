const salaryController = require('../controller/salaryController')
const salaryValidation = require('../validationSchema/salaryValidation')
const { createValidator } = require('express-joi-validation')
const validator = createValidator()
const router = require('express').Router()


router.post('/employee/:id/', validator.body(salaryValidation), salaryController.createSalary)

router.get('/employee/:id', salaryController.getEmpSal)

router.get('/:id', salaryController.getSalary)



module.exports = router
