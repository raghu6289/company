const Authenticate = require('../middleware/auth')
const router = require('express').Router()
const userRoute = require('../controller/userController')
const deptRouter = require('./departmentRoutes')
const empRouter = require('./employeeRoutes')
const packageRouter = require('./packageRoutes')
const salaryRouter = require('./salaryRoutes')
const projectRouter = require('./projectRoutes')


// User Routes
router.post("/register", userRoute.register)
router.post("/login", userRoute.login)

// Routes
router.use("/department", deptRouter)
router.use("/employee", empRouter)
router.use("/package", packageRouter)
router.use("/salary", Authenticate, salaryRouter)
router.use("/project", projectRouter)


module.exports = router







