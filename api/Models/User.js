const Sequelize = require('sequelize')

const sequelize = require('../utils/database')

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING,
        required: true
    },
    lastName: {
        type: Sequelize.STRING,
        required: true
    },
    email: {
        type: Sequelize.STRING,
        required: true
    },
    Salary: Sequelize.FLOAT,
    Approval: Sequelize.FLOAT,
    Status: Sequelize.STRING,
})

module.exports = User