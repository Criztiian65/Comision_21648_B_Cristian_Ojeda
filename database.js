const { Sequelize } = require('sequelize');
const sequelize = new Sequelize ('base_Posts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {sequelize}