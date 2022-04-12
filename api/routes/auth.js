const express = require('express')
const router = express.Router()

const AuthController = require('../Controllers/AuthController')

router.get('/register', AuthController.getSignUp)

// Sign up Route
// /router.post('/register', AuthController.postSignUp)

module.exports = router

