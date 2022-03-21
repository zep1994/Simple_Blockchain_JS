const express = require('express')
const router = express.Router()

const BlockChain= require('../BlockChain')
const Chain = require('../BlockChain')
//console.log(BlockChain)

router.get('/add-employee', (req, res, next) => { 
    res.send({ FirstName: res.FirstName, LastName: res.LastName, Amount: res.Amount })
    console.log(JSON.stringify(BlockChain, null, 6))
})
 
router.post('/employee', (req, res) => {
    BlockChain.BlockChain({FirstName: req.body.FirstName, LastName: req.body.LastName, Amount: req.body.Amount})
    res.redirect('/')
})

router.get('/employee', (req, res) => {
    res.send(Chain)
})

module.exports = router