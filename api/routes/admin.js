const express = require('express')
const router = express.Router()

const EmployeeController = require('../Controllers/EmployeesController')

// Admin Employee Routes
router.get('/add-employee', EmployeeController.getAddEmployee)
router.post('/employee', EmployeeController.postAddEmployee)
router.get('/employees', EmployeeController.getAllEmployees)

module.exports = router 

