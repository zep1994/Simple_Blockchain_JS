const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: true
    },
    timeoff: {
        times: [
            {
                timeId: { type: Schema.Types.ObjectId, ref: 'TimeOff', required: true },
                startDate: { type: Schema.Types.Date, required: true },
                endDate: { type: Schema.Types.Date, required: true },
                hours: { type: Schema.Types.Number, required: true }
            }
        ]
    }
})

module.exports = mongoose.model('User', userSchema);


// //const Sequelize = require('sequelize')
// const bcrypt = require('bcrypt');
// const { getDb } = require('../utils/database');
// const mongodb = require('mongodb')

// const ObjectId = mongodb.ObjectId

// class User {
//     constructor(firstName, lastName, email, password, status) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.email = email
//         this.password = password
//     }

//     save() {
//         const db = getDb()
//         return db.collection('users').insertOne(this).then(res => {
//             console.log(res)
//         }).catch(err => {
//             console.log(err)
//         })
//     }

//     static findById(userId) {
//         const db = getDb();
//         return db
//             .collection('users')
//             .findOne({ _id: new ObjectId(userId) })
//             .then(user => {
//                 console.log(user);
//                 return user;
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//         }
//     }
    

// module.exports = User

// //const sequelize = require('../utils/database')

// // const User = sequelize.define('user', {
// //     id: {
// //         type: Sequelize.INTEGER,
// //         autoIncrement: true,
// //         allowNull: false,
// //         primaryKey: true
// //     },
// //     firstName: {
// //         type: Sequelize.STRING,
// //         required: true
// //     },
// //     lastName: {
// //         type: Sequelize.STRING,
// //         required: true
// //     },
// //     email: {
// //         type: Sequelize.STRING,
// //         required: true
// //     },
// //     password: {
// //         type: Sequelize.STRING,
// //         allowNull: true
// //     },
// //     Salary: Sequelize.FLOAT,
// //     Approval: Sequelize.FLOAT,
// //     Status: Sequelize.STRING,
// // },
// // {
// // hooks: {
// //     beforeCreate: async (user) => {
// //         if (user.password) {
// //         const salt = await bcrypt.genSaltSync(10, 'a');
// //         user.password = bcrypt.hashSync(user.password, salt);
// //         }
// //         },
// //         beforeUpdate:async (user) => {
// //         if (user.password) {
// //         const salt = await bcrypt.genSaltSync(10, 'a');
// //         user.password = bcrypt.hashSync(user.password, salt);
// //         }
// //         }
// //     }
// // });

// //module.exports = User