const User = require('../Models/User')
const router = require('../routes/auth')

const path = require('path')
const rootDir = require('../utils/path')

exports.getSignUp = (req, res, next) => {
    return res.sendFile(path.join(rootDir, 'views', 'Auth/Register.html'))
    }

exports.postSignUp = (req, res, next) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    User.findByPk({email: email}) // Check to see if user exists
    .then(x => {
        if (x) { // if user exists, redirect to login
            return res.redirect('/login')
        }
        const user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            status: "Active"
        })
    })
    .catch(err => {
        console.log(err)
    })
}