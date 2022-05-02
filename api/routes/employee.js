const express = require('express')
const router = express.Router()

const TimeOffController = require('../Controllers/TimeOffController')

// Master Time Off
router.get('/timeoff_master', TimeOffController.getTimesOff)

// GET Time off Route
router.get('/timeoff', TimeOffController.getTimeOff)

// POST Sign up Route
router.post('/timeoff', TimeOffController.postTimeOff)

module.exports = router

