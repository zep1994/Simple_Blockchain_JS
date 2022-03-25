const User = require('../Models/User')

exports.postSignUp = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    User.findOne({email: email}) // Check to see if user exists
    .then(user => {
        if (user) { // if user exists, redirect to login
            return res.redirect('/login')
        }
        const user = new User({
            email: email,
            password: password
        })
    })
    .catch(err => {
        console.log(err)
    })
}