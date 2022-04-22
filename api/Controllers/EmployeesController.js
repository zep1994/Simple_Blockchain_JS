const BlockChain= require('../BlockChain/BlockChain')
const Chain = require('../BlockChain/BlockChain')

const path = require('path')
const rootDir = require('../utils/path')

// Get Route 
exports.getAddEmployee = (req, res, next) => { 
    res.send({ FirstName: res.FirstName, LastName: res.LastName, Amount: res.Amount })
    console.log(JSON.stringify(BlockChain, null, 6))
}

// POST Route
exports.postAddEmployee = (req, res) => {
    BlockChain.BlockChain({FirstName: req.body.FirstName, LastName: req.body.LastName, Amount: req.body.Amount})
    res.redirect('/')
}

// Get All Employees
exports.getAllEmployees = (req, res) => {
    res.send(Chain)
}

// TIME OFF
exports.getTimeOff = (req, res) => {
    return res.sendFile(path.join(rootDir, 'views', 'Time-off/CreateTimeOff.html'))
}

// Create Time Off
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