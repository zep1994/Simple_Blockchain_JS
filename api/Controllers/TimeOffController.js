const path = require('path')
const rootDir = require('../utils/path')
const TimeOff = require('../Models/TimeOff')
const { getDb } = require('../utils/database')

// FETCH ALL TIME OFF
exports.getTimesOff = (req, res, next) => {
    TimeOff.fetchAll()
        .then(timeoff => {
            res.render('Timeoff/index', {
                items: timeoff,
                pageTitle: TimeOff,
                path: '/timeoff_master'
            })
        })
        .catch(err => {
            console.log(err)
        })
}

// TIME OFF
exports.getTimeOff = (req, res) => {
    return res.sendFile(path.join(rootDir, 'views', 'Timeoff/CreateTimeOff.html'))
}

// Create Time Off
exports.postTimeOff = (req, res, next) => {
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const hours = req.body.hours 
    const timeOff = new TimeOff(
        startDate, 
        endDate, 
        hours, 
        null, 
        req.user._id
    )
    timeOff
        .save()
        .then(() => {
            res.redirect('/timeoff')
        })
        .catch(err => {
            console.log(err)
        })
}

exports.getTime = (req, res, next) => {
    const timeId = req.params.timeId
    TimeOff.findById(timeId)
        .then(time => {
            res.render('Timeoff/show', {
                item: time,
                pageTitle: time,
                path: '/timeoff'
            })
        })
}