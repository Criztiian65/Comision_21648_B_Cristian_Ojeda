const {sequelize} = require ('../../database')
const {DataTypes} = require ('sequelize')

const postModel = sequelize.define('Posteos', {
    titulo_del_post: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    url: DataTypes.STRING,
    
})

module.exports = {postModel};
