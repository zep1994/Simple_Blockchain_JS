const path = require('path')
const rootDir = require('../utils/path')
const TimeOff = require('../Models/TimeOff')

// TIME OFF
exports.getTimeOff = (req, res) => {
    return res.sendFile(path.join(rootDir, 'views', 'Time-off/CreateTimeOff.html'))
}

// Create Time Off
exports.postTimeOff = (req, res, next) => {
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const hours = req.body.hours 
    const timeOff = new TimeOff(startDate, endDate, hours)
    timeOff
        .save()
        .then(() => {
            res.redirect('/timeoff')
        })
        .catch(err => {
            console.log(err)
        })
}