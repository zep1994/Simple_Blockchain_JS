//const Sequelize = require('sequelize')
const bcrypt = require('bcrypt');

class User {
    constructor(firstName, lastName, email, password, status) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
    }

    save() {
        const db = getDb()
        db.collection('users').insertOne(this).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }
}

//const sequelize = require('../utils/database')

// const User = sequelize.define('user', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     firstName: {
//         type: Sequelize.STRING,
//         required: true
//     },
//     lastName: {
//         type: Sequelize.STRING,
//         required: true
//     },
//     email: {
//         type: Sequelize.STRING,
//         required: true
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: true
//     },
//     Salary: Sequelize.FLOAT,
//     Approval: Sequelize.FLOAT,
//     Status: Sequelize.STRING,
// },
// {
// hooks: {
//     beforeCreate: async (user) => {
//         if (user.password) {
//         const salt = await bcrypt.genSaltSync(10, 'a');
//         user.password = bcrypt.hashSync(user.password, salt);
//         }
//         },
//         beforeUpdate:async (user) => {
//         if (user.password) {
//         const salt = await bcrypt.genSaltSync(10, 'a');
//         user.password = bcrypt.hashSync(user.password, salt);
//         }
//         }
//     }
// });

//module.exports = User