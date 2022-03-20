const express = require('express')
const router = express.Router()

const BlockChain = require('../BlockChain')
//console.log(BlockChain)

router.get('/add-employee', (req, res, next) => { 
    res.send({ FirstName: res.FirstName, LastName: res.LastName, Amount: res.Amount })
    console.log(JSON.stringify(BlockChain, null, 6))
})
 
router.post('/employee', (req, res) => {
    BlockChain.BlockChain({FirstName: req.body.FirstName, LastName: req.body.LastName, Amount: req.body.Amount})
    //BlockChain.addBlock({FirstName: req.FirstName, LastName: req.LastName, Amount: req.Amount})
    //BlockChain.addBlock({FirstName: "Wes", LastName: "Tim", Amount: 203})
    //BlockChain.addBlock({FirstName: "Tom", LastName: "Jim", Amount: 2099403})
    //console.log(req.body)
    res.redirect('/')
})

module.exports = router