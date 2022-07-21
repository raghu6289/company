const empController = require('../controller/employeeController')
const empValidation = require('../validationSchema/employeeValidation')
const { createValidator } = require('express-joi-validation')
const validator = createValidator()
const router = require('express').Router()


router.post('/dept/:id/', validator.body(empValidation), empController.createEmp)
router.patch('/:id', validator.body(empValidation), empController.updateEmp)

router.delete('/:id', empController.deleteEmp)

router.get('/salaries/empid/:id', empController.getEmpSal)
router.get('/:id', empController.getEmp)
router.get('/', empController.getEmpDetails)


module.exports = router
