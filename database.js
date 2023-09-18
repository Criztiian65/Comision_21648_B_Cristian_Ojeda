const { Sequelize } = require('sequelize');
const sequelize = new Sequelize ('base_posts', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {sequelize}