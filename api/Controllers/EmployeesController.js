const BlockChain= require('../BlockChain/BlockChain')
const Chain = require('../BlockChain/BlockChain')

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