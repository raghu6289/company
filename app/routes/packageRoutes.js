const packageContoller = require('../controller/packageController')
const packageValidation = require('../validationSchema/packageValidation')
const { createValidator } = require('express-joi-validation')
const validator = createValidator()
const router = require('express').Router()


router.post('/emp/:id/', validator.body(packageValidation), packageContoller.createPackage)
router.patch('/:id', validator.body(packageValidation), packageContoller.updatePackage)

router.get('/:id', packageContoller.getPackage)


module.exports = router
