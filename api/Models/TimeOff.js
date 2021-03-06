const mongoose = require('mongoose')

const Schema = mongoose.Schema

const timeSchema = new Schema({
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    hours: {
        type: Number,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})

module.exports = mongoose.model('TimeOff', timeSchema)

// const { getDb } = require('../utils/database')
// const mongodb = require('mongodb')

// class TimeOff {
//     constructor(startDate, endDate, hours, id, userId) {
//         this.startDate = startDate
//         this.endDate = endDate
//         this.hours = hours
//         this._id = id ? new mongodb.ObjectId(id) : null
//         this.userId = userId
//     }

//     save() {
//         const db = getDb()
//         return db.collection('timeoff').insertOne(this).then(res => {
//             console.log(res)
//         }).catch(err => {
//             console.log(err)
//         })
//     }

//     // FETCH ALL
//     static fetchAll() {
//         const db = getDb()
//         return db
//         .collection('timeoff')
//         .find()
//         .toArray()
//         .then(timeoff =>{
//             console.log(timeoff)
//             return timeoff
//         })
//         .catch(err => {console.log(err)})
//     }

//     //FETCH SINGLE
//     static findById(timeId) {
//         const db = getDb()
//         return db
//         .collection('timeoff')
//         .find({_id: new mongodb.ObjectId(timeId)})
//         .next()
//         .then(time => {
//             console.log(time)
//             return time
//         })
//         .catch(err => {
//             console.log(err)
//         })
//     }
// }

// module.exports = TimeOff