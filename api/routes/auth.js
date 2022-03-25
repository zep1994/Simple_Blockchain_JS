const express = require('express')
const router = express.Router()

const AuthController = require('../Controllers/AuthController')

// Sign up Route
router.post('/sign-up', AuthController.postSignUp)

module.exports = router

