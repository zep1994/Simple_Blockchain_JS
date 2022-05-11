const path = require('path') 

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)

const User = require('./Models/User')

const MONGODB_URI = 'mongodb+srv://tmatlock:Rebel1994!@node.9l9xu.mongodb.net/hr_blockchain'

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
    secret: 'This is a very long secret that will need to be changed going forward',
    resave: false,
    saveUninitialized: false,
    store: store
  })
);

app.use(HomeRoutes)
app.use('/admin/', AdminRoutes)

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  User.findById(req.session.user._id)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use(EmployeeRoutes)
app.use(UserRoutes)
app.use(AuthRoutes)

mongoose.connect(MONGODB_URI)
  .then(res => {
    app.listen(port)
  })
  .catch(err => {
    console.log(err)
  })
