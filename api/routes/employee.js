const express = require('express')
const router = express.Router()

const EmployeesController = require('../Controllers/TimeOffController')

// GET Time off Route
router.get('/timeoff', EmployeesController.getTimeOff)

// POST Sign up Route
router.post('/timeoff', EmployeesController.postTimeOff)

module.exports = router

