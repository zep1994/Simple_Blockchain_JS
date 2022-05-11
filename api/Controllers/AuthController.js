const User = require('../Models/User')

exports.getSignUp = (req, res, next) => {
    return res.render('Auth/register', {
                pageTitle: "Sign Up",
                path: '/register',
                isAuthenticated: req.isLoggedIn
            })
    }

exports.postSignUp = (req, res, next) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    User.findById({email: email}) // Check to see if user exists
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


exports.getLogin = (req, res, next) => {
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
        });
    };

exports.postLogin = (req, res, next) => {
    User.findById(req.session._id)
        .then(user => {
            req.session.isLoggedIn = true 
            req.session.user = user 
            res.redirect('/')
        })
        .catch(err => console.log(err))
}

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        res.redirect('/');
        });
    };