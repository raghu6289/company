const prjectController = require('../controller/ProjectController')
const projectValidation = require('../validationSchema/projectValidation')
const { createValidator } = require('express-joi-validation')
const validator = createValidator()
const router = require('express').Router()


router.post('/deptId/:id/', validator.body(projectValidation), prjectController.createProject)
router.patch('/:id/', validator.body(projectValidation), prjectController.updateProject)

router.get('/', prjectController.getAllProject)
router.get('/:id', prjectController.getProject)

router.delete('/:id', prjectController.deleteProject)


module.exports = router
