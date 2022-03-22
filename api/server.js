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
const db = require('./utils/database')

// Set Routes paths from folder
app.use('/admin/', AdminRoutes)
app.use(UserRoutes)

db.execute("SELECT * FROM Users")

// Create HTTP Server
app.listen(port, () => console.log(`Listening on port ${port}`))
