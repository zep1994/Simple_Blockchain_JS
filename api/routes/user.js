const express = require('express')
const router = express.Router()

const { route } = require('./admin')
const BlockChain= require('../BlockChain/BlockChain')
const Chain = require('../BlockChain/BlockChain')

const path = require('path')
const rootDir = require('../utils/path')

// // Create Time Off Route
// router.post('/time-off', (req, res) => {
//     BlockChain.BlockChain({StartDate: req.body.StartDate, EndDate: req.body.EndDate, Type: req.body.Type, Requesting: req.body.Requesting, Comment: req.body.Comment})
//     res.redirect('/')
// })

module.exports = router

