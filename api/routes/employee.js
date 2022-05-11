const express = require('express')
const router = express.Router()

const TimeOffController = require('../Controllers/TimeOffController')
const isAuth = require('../Middleware/is-auth')

// Master Time Off
router.get('/timeoff_master', isAuth, TimeOffController.getTimesOff)

// GET Time off Route
router.get('/timeoff', isAuth, TimeOffController.getTimeOff)

// POST Sign up Route
router.post('/timeoff', isAuth, TimeOffController.postTimeOff)

//GET SINGLE TIME
router.get('/timeoff/:timeId', isAuth, TimeOffController.getTime)

module.exports = router

