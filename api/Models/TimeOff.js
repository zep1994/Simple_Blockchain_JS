const { getDb } = require('../utils/database')
const mongodb = require('mongodb')

class TimeOff {
    constructor(startDate, endDate, hours) {
        this.startDate = startDate
        this.endDate = endDate
        this.hours = hours
    }

    save() {
        const db = getDb()
        return db.collection('timeoff').insertOne(this).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    // FETCH ALL
    static fetchAll() {
        const db = getDb()
        return db
        .collection('timeoff')
        .find()
        .toArray()
        .then(timeoff =>{
            console.log(timeoff)
            return timeoff
        })
        .catch(err => {console.log(err)})
    }

    //FETCH SINGLE
    static findById(timeId) {
        const db = getDb()
        return db
        .collection('timeoff')
        .find({_id: prodId})
        .next()
        .then(time => {
            console.log(time)
            return time
        })
        .catch(err => {
            console.log(err)
        })
    }
}

module.exports = TimeOff