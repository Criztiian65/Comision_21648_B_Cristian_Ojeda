const {sequelize} = require ('../../database')
const {DataTypes} = require ('sequelize')

const postModel = sequelize.sync('Posteos', {
    titulo_del_post: DataTypes.STRING,
    contenido: DataTypes.TEXT,
    url: DataTypes.TEXT
    
})

module.exports = {postModel};
