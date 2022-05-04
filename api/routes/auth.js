const express = require('express')
const router = express.Router()

const AuthController = require('../Controllers/AuthController')

router.get('/register', AuthController.getSignUp)

// POST Sign up Route
router.post('/register', AuthController.postSignUp)

//Login
router.get('/login', AuthController.getLogin)

module.exports = router

