exports.getIndex = (req, res, next) => { 
    return res.render('home', {
        path: '/',
        isAuthenticated: req.session.isLoggedIn
    })
}