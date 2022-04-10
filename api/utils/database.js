const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://tmatlock:Rebel1994!@node.9l9xu.mongodb.net/hr_blockchain?retryWrites=true&w=majority'
  )
  .then(client => {
    console.log('Connected!');
    _db = client.db();
    callback();
  })
  .catch(err => {
    console.log(err);
    throw err;
  });
};

const getDb = () => {
if (_db) {
  return _db;
}
throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;



// PART 2
//**********************************************************************************************



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://tmatlock:Rebel1994!@node.9l9xu.mongodb.net/hr_blockchain?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// const mongoConnect = () => {
//     client.connect(err => {
//         const collection = client.db("node").collection("hr_blockchain")
//         // perform actions on the collection object
//         console.log("connected")
//     })
// } 


// module.exports = mongoConnect

// PART 1
//**********************************************************************************************

// require('dotenv').config();
// const db_name = process.env.DATABASE_NAME
// const password = process.env.DATABASE_PASSWORD

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const mongoConnect = () => {
//     MongoClient.connect(`mongodb+srv://tmatlock:${password}@node.9l9xu.mongodb.net/${db_name}?retryWrites=true&w=majority`)
//     .then(client => {
//         console.log("Connected")
//         callback(client)
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

// module.exports = mongoConnect










///     BELOW IS SEQUALIZE






// require('dotenv').config();
// const password = process.env.DATABASE_PASSWORD
// const db_name = process.env.DATABASE_NAME

// const Sequelize = require('sequelize')

// const sequelize = new Sequelize(db_name, 'root', password, {
//     dialect: 'mysql', 
//     host: 'localhost'
// })

// module.exports = sequelize


// const password = process.env.DATABASE_PASSWORD
// const db_name = process.env.DATABASE_NAME
// const mysql = require('mysql2')


// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     port: 3306,
//     database: db_name ,
//     password: password,
// })

// module.exports = pool.promise()