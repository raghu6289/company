const ProjectAssignController = require('../controller/ProjectAssignController')
const router = require('express').Router()


router.post('/:id/', ProjectAssignController.createProjectAssign)

// router.patch('/:id/', ProjectAssignController.updateProjectAssign)

router.get('/:id', ProjectAssignController.getProjectAssign)

module.exports = router
