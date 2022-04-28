const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path') // create project path and not OS path and we will use path join to concat the path regardless of OS
const mongoConnect = require('./utils/database').mongoConnect
const app = express()
const port = process.env.PORT || 3000 // Port 3000
app.use(cors()) // Allow Cors

//Set Template engine to ejs
app.set('view engine', 'ejs');
app.set('views', 'api/views');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));



//Define User Routes
const HomeRoutes = require('./routes/home')
const AdminRoutes = require('./routes/admin')
const UserRoutes = require('./routes/user')
const AuthRoutes = require('./routes/auth')
const EmployeeRoutes = require('./routes/employee')

//const sequelize = require('./utils/database')
const User = require('./Models/User')
const { ObjectId, Db } = require('mongodb')

app.use(HomeRoutes)
app.use('/admin/', AdminRoutes)

app.use(EmployeeRoutes)
app.use(AuthRoutes)
app.use(UserRoutes)

mongoConnect(client => {
    app.listen(port);
  });
  



// SEQUALIZE IS BELOW 


// app.use((req, res, next) => {
//   // User.find({"_id": ObjectId('62625f88677b8a16e238356f')})
//   //     .then(user => {
//   //         req.user = user
//   //         next()
//   //     })
//   //     .catch(err => console.log(err))
//   next()
// })








// // Define Relations
// // User.hasMany(Model, { constraints: true, onDelete: 'CASCADE' })

// sequelize
    
//     //.sync({ force: true }) // Rewrite DB tables each restart
//     .sync()
//     .then(res => {
//         return User.findByPk(1)
//         // Create HTTP Server
//         //app.listen(port, () => console.log(`Listening on port ${port}`))
//     })
//     .then(user => {
//         if (!user) {
//             return User.create({ firstName: 'Thomas', lastName: 'Matlock', email: 'thomasmatlockbba@gmail.com', password: '123456', Status: 'Active' })
//         }
//         return user
//     })
//     .catch(err => console.log(err))

