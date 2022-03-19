const express = require('express')
const router = express.Router()


router.get('/add-employee', (req, res, next) => { 
    res.send({ FirstName: res.FirstName, LastName: res.LastName, Amount: res.Amount })
})

router.post('/employee', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router