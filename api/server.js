const path = require('path') 

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const User = require('./Models/User')
const { ObjectId, Db } = require('mongodb')

const MONGODB_URI = 'mongodb+srv://tmatlock:Rebel1994!@node.9l9xu.mongodb.net/hr_blockchain?retryWrites=true&w=majority'

const app = express()
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
})
const port = process.env.PORT || 3000 // Port 3000

app.set('view engine', 'ejs');
app.set('views', 'api/views');


const HomeRoutes = require('./routes/home')
const AdminRoutes = require('./routes/admin')
const UserRoutes = require('./routes/user')
const AuthRoutes = require('./routes/auth')
const EmployeeRoutes = require('./routes/employee')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({ 
    secret: 'my secret', 
    resave: false, 
    saveUnitialized: false,
    store: store
  })
)

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

mongoose.connect(MONGODB_URI)
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
