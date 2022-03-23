require('dotenv').config();
const password = process.env.DATABASE_PASSWORD
const db_name = process.env.DATABASE_NAME

const Sequelize = require('sequelize')

const sequelize = new Sequelize(db_name, 'root', password, {
    dialect: 'mysql', 
    host: 'localhost'
})

module.exports = sequelize


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