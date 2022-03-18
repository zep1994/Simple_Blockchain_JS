const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000 // Port 5000
app.use(cors()) // Allow Cors
app.use(bodyParser.urlencoded({extended: false}))

// Create HTTP Server
app.listen(port, () => console.log(`Listening on port ${port}`))

// Create Home Route
app.use('/add-employee', (req, res, next) => { 
    res.send({ FirstName: res.FirstName, LastName: res.LastName, Amount: res.Amount })

    next()
})

app.use('/employee', (req, res) => {
    console.log(res.body)
    res.redirect('/')
})

// Create Home Route
app.use('/', (req, res) => { 
    console.log(res.body)
})