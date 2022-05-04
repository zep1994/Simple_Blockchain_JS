const path = require('path') 

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const User = require('./Models/User')
const { ObjectId, Db } = require('mongodb')

const app = express()
const port = process.env.PORT || 3000 // Port 3000

app.set('view engine', 'ejs');
app.set('views', 'api/views');

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

const HomeRoutes = require('./routes/home')
const AdminRoutes = require('./routes/admin')
const UserRoutes = require('./routes/user')
const AuthRoutes = require('./routes/auth')
const EmployeeRoutes = require('./routes/employee')

app.use(HomeRoutes)
app.use('/admin/', AdminRoutes)

app.use((req, res, next) => {
  User.findById('627295e68c57079e3e67cdc3')
      .then(user => {
          req.user = user
          next()
      })
      .catch(err => console.log(err))
})

app.use(EmployeeRoutes)
app.use(UserRoutes)
app.use(AuthRoutes)

mongoose.connect('mongodb+srv://tmatlock:Rebel1994!@node.9l9xu.mongodb.net/hr_blockchain?retryWrites=true&w=majority')
  .then(res => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          firstName: "Thomas",
          lastName: "Matlock",
          email: "thomasmatlockbba@gmail.com",
          salary: "100000",
          status: "Active",
          timeoff: {
            time: []
          }
        })
        user.save()
      }
    })
    app.listen(port)
  })
  .catch(err => {
    console.log(err)
  })
