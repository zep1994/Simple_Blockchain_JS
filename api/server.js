const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000 // Port 5000
app.use(cors()) // Allow Cors
app.use(bodyParser.urlencoded({extended: false}))

//Define User Routes
const AdminRoutes = require('./routes/admin')
const UserRoutes = require('./routes/user')

// Set Routes paths from folder
app.use(AdminRoutes)
app.use(UserRoutes)

// Create HTTP Server
app.listen(port, () => console.log(`Listening on port ${port}`))
