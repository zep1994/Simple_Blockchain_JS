exports.getIndex = (req, res, next) => { 
    console.log('reached')
    return res.render('home')
}