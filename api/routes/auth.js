const express = require('express')
const router = express.Router()

const AuthController = require('../Controllers/AuthController')

// Sign up Route
router.post('/register', AuthController.postSignUp)

module.exports = router

