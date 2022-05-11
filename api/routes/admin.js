const express = require('express')
const router = express.Router()

const EmployeeController = require('../Controllers/EmployeesController')
const AdminController = require('../Controllers/AdminController')
const isAuth = require('../Middleware/is-auth')

// Admin Employee Routes
router.get('/add-employee', isAuth, EmployeeController.getAddEmployee)
router.post('/employee', isAuth, EmployeeController.postAddEmployee)
router.get('/employees', isAuth, EmployeeController.getAllEmployees)

module.exports = router 

