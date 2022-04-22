const path = require('path')
const rootDir = require('../utils/path')

// TIME OFF
exports.getTimeOff = (req, res) => {
    return res.sendFile(path.join(rootDir, 'views', 'Time-off/CreateTimeOff.html'))
}

// Create Time Off
exports.postTimeOff = (req, res, next) => {
    const startDate = req.body.startDate
    const endDate = req.body.endDate
    const hours = req.body.hours 
    
}