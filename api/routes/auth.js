const express = require('express')
const router = express.Router()

const AuthController = require('../Controllers/AuthController')

router.get('/signup', AuthController.getSignUp)

// POST Sign up Route
router.post('/signup', AuthController.postSignUp)

//Login
router.get('/login', AuthController.getLogin)

//Login
router.post('/login', AuthController.postLogin)

//Logout
router.post('/logout', AuthController.postLogout)

module.exports = router

