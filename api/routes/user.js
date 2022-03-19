const express = require('express')
const router = express.Router()

// Create Home Route
router.get('/', (req, res) => { 
    console.log("This is the home page")
})

module.exports = router