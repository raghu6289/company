const deptController = require('../controller/departmentController')
const deptValidation = require('../validationSchema/departmentValidation')
const { createValidator } = require('express-joi-validation')
const router = require('express').Router()
const validator = createValidator()


router.post('/', validator.body(deptValidation), deptController.createDept)
router.get('/', deptController.getAllDept)
router.get('/:id', deptController.getDept)
router.delete('/:id', deptController.deleteDept)


module.exports = router
