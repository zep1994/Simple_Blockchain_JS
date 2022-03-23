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
const sequelize = require('./utils/database')
const User = require('./Models/User')

// Set Routes paths from folder
app.use('/admin/', AdminRoutes)
app.use(UserRoutes)

app.use((req, res, next) => {
    User.findByPk(1)
        .then(user => {
            req.user = user
            next()
        })
        .catch(err => console.log(err))
})

// Define Relations
// User.hasMany(Model, { constraints: true, onDelete: 'CASCADE' })

sequelize
    //.sync({ force: true })
    .sync()
    .then(res => {
        return User.findByPk(1)
        // Create HTTP Server
        //app.listen(port, () => console.log(`Listening on port ${port}`))
    })
    .then(user => {
        if (!user) {
            return User.create({ firstName: 'Thomas', lastName: 'Matlock', email: 'thomasmatlockbba@gmail.com' })
        }
        return user
    })
    .catch(err => console.log(err))

